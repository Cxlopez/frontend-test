// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Contact = {
  id: number;
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact[]>
) {
  const contacts: Contact[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith"},
  ]

  res.status(200).json(contacts)
}
