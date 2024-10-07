import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/mongodb';
import { ObjectId } from 'mongodb';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req

    switch(method){

        case "DELETE":
            
            try{
                await client.connect();
                const db = client.db();
                const jobsCollection = db.collection('jobs');
                const { jobId } = req.query;

                if (!jobId || typeof jobId !== "string") {
                    return res.status(400).json({ message: 'Invalid jobId' });
                }

                const result = await jobsCollection.deleteOne({ _id: new ObjectId(jobId) });

                if (result.deletedCount === 0) {
                    return res.status(404).json({ message: 'Job not found' });
                }

                return res.status(200).json({ message: 'Job deleted successfully' });

            }
            catch(error){

                return res.status(500).json({ message: 'Internal Server Error', error });

            }


        case "PATCH":
            try {

                await client.connect()
                const db = client.db()
                const jobsCollection = db.collection('jobs')
                const { jobId } = req.query;
                if (!jobId || typeof jobId !== "string") {
                    return res.status(400).json({ message: 'Invalid jobId' });
                }
                const updateFields = req.body;

                const result = await jobsCollection.updateOne(
                    { _id: new ObjectId(jobId) },
                    { $set: updateFields }
                );
                if (result.matchedCount === 0) {
                    return res.status(404).json({ message: 'Job not found' });
                }
                return res.status(200).json({ message: 'Job updated successfully' });
            }

            catch(error){

                console.error(error);
                return res.status(500).json({ message: 'Internal Server Error', error });
                
            }

        default:
            res.setHeader(`allow`, ['DELETE', 'PATCH'])
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}