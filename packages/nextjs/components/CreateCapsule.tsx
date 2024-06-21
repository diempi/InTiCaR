import { FormEvent, useState } from 'react';
import { useAccount } from "@starknet-react/core";
import { useScaffoldReadContract } from './../hooks/scaffold-stark/useScaffoldReadContract';
import { useScaffoldWriteContract } from './../hooks/scaffold-stark/useScaffoldWriteContract';

const CreateCapsule = () => {
  const [message, setMessage] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [deposit, setDeposit] = useState('');





  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <h1>Create a Time Capsule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <div>
          <label>Unlock Date:</label>
          <input type="date" value={unlockDate} onChange={(e) => setUnlockDate(e.target.value)} required />
        </div>
        <div>
          <label>Deposit (ETH):</label>
          <input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} required />
        </div>
        <button type="submit">Create Capsule</button>
      </form>
    </div>
  );
};

export default CreateCapsule;