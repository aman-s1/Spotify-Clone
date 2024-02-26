import { User } from "@supabase/auth-helpers-react";

interface AccountContentProps {
  user: User;
}

const AccountContent: React.FC<AccountContentProps> = ({ user }) => {
  return (
    <div className="flex flex-col w-full px-6 text-neutral-300">
      <div className="rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-600">Name:</span>
            <span className="text-sm text-neutral-500">{user.user_metadata.full_name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-600">Email:</span>
            <span className="text-sm text-neutral-500">{user.user_metadata.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountContent;
