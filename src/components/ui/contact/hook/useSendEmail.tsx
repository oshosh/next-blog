import { ChangeEvent, FormEvent, useState } from 'react';

interface Send {
  from: string;
  subject: string;
  message: string;
}

const SEND = {
  from: '',
  subject: '',
  message: '',
};

const useSendEmail = () => {
  const [send, setSend] = useState<Send>(SEND);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    const id = e.target.id as keyof Send;

    switch (id) {
      case 'from':
      case 'subject':
      case 'message':
        setSend((prev) => {
          return {
            ...prev,
            [id]: value,
          };
        });
        break;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(send);
  };

  return { send, onSubmit, onChange };
};

export default useSendEmail;
