import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity{
    id : string;
    login : string;
    name : string;
    company : string;
    bio : string; 
}

const createDefaultMemberDetail = () =>({
    id: '',
    login: '',
    name: '',
    company: '',
    bio: '',
})

export const DetailPage: React.FC = () => {
    const [member, setMember] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());
    const { id } = useParams();
    
    React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => setMember(json));
    }, []);

  return (
    <>
      <h2>Hello from Detail page</h2>
        <span> id: {member.id}</span>
        <span> login: {member.login}</span>
        <span> name: {member.name}</span>
        <span> company: {member.company}</span>
        <span> bio: {member.bio}</span>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
