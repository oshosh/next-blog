'use client';
import useSendEmail from './hook/useSendEmail';

function SendEmail() {
  const {
    send: { from, subject, message },
    onSubmit,
    onChange,
  } = useSendEmail();

  return (
    <div className='rounded-xl bg-slate-500 mt-16 w-96'>
      <form onSubmit={onSubmit} className='flex flex-col p-6 space-y-2'>
        {/* 이메일 */}
        <label className='text-white' htmlFor='from'>
          Your Email
        </label>
        <input type='text' id='from' value={from} onChange={onChange} />
        {/* 제목 */}
        <label className='text-white' htmlFor='subject'>
          subject
        </label>
        <input type='text' id='subject' value={subject} onChange={onChange} />
        {/* 내용 */}
        <label className='text-white' htmlFor='message'>
          Message
        </label>
        <textarea className='h-52' id='message' value={message} onChange={onChange} />
        <button type='submit' className='flex justify-center bg-yellow-500'>
          <span className='font-bold'>Submit</span>
        </button>
      </form>
    </div>
  );
}

export default SendEmail;
