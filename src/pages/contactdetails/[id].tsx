export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  
  const paths = data.map(contact => {
    return {
      params: { id: contact.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}
//Generating paths for dynamic routes 
export const getStaticProps = async (context) => {
  const id = context.params.id; 
  const res = await fetch(`http://localhost:3000/api/hello/${id}`);
  const data = await res.json();


  return {
    props: { contact: data }
  }
}

const ContactDetails = ({ contact }) => {
  return (
    <div>
      <h1>{ contact.name }</h1>
    </div>
  );
}

export default ContactDetails;