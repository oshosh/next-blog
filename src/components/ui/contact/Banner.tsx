interface Banner {
  message: string;
  state: 'success' | 'error';
}

function Banner({ banner: { message, state } }: { banner: Banner }) {
  const isSuccess = (state = 'success');
  const icon = isSuccess ? '✅' : '🔥';

  return (
    <p className={`p-2 ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`}>{`${icon} ${message}`}</p>
  );
}

export default Banner;
