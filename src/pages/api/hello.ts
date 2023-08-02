// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

type Contact = {
  id: number;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  const contact = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Joe Doe' },
    { id: 3, name: 'Jack Doe' }
  ];
  
  res.status(200).json(contact);
}

