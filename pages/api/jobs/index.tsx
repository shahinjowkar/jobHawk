
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@/lib/mongodb';

interface Job {
  companyName: string;
  position: string;
  startDate: string; 
  applicationDate: Date;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {

    case 'GET':
        try{
            await client.connect();
            const db =  client.db();
            const jobsCollection = db.collection("jobs");
            const jobs = await jobsCollection.find({}).toArray();
            const serializedJobs = jobs.map((job) => ({
                ...job,
                _id: job._id.toString(),
            }))
            res.status(201).json(serializedJobs);
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Failed to fetch jobs', error });
        }

    case 'POST':

        try {

            await client.connect();  
            const db = client.db();
            const jobsCollection = db.collection('jobs');
            const newJob: Job = req.body;
            const result = await jobsCollection.insertOne(newJob);
            res.status(201).json({
                _id: result.insertedId,
                ...newJob,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to create the job', error });
            
        }
        break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']); 
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}