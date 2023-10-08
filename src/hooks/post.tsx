import {useEffect, useState} from 'react';

type User = {
  id: string;
  nombre: string;
  email: string;
  location: string;
  phone: number;
};

function PostUser() {
  const [, setLoading] = useState(true);
  const [, setData] = useState<User[]>([]);
  const POST = async () => {
    try {
      const response = await fetch('https://localHost8080/api/v1/singUp');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    POST();
  }, []);
}
export default PostUser;
