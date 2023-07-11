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

const useSendEmail = (setBanner: any) => {
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 인스턴스화 필요..
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(send),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    setBanner({
      message: '성공입니다.',
      state: 'success',
    });
  };

  return { send, onSubmit, onChange };
};

export default useSendEmail;
