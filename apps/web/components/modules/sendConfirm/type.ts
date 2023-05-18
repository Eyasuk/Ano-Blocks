export type SendConfirmProps = {
  open: boolean;
  onCancel: () => void;
  address: string;
  asset: string;
  amount: number;
};
