import { ITokenStatus } from '../../types/token';

function TokenStatus({ tokenNumber, label }: ITokenStatus) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="align-center p-3">{label}</div>
      <div className="align-center p-3">Token: {tokenNumber}</div>
    </div>
  );
}

export default TokenStatus;
