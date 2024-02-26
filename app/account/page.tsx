"use client";

import { useState } from 'react';

import Header from '@/components/Header';
import AccountContent from './components/AccountContent';

import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';

export const revalidate = 0;

const Account = async () => {
    const { user } = useUser();
    const authModal = useAuthModal();

    const [userData, setUserData] = useState(null);

    if(!user) {
        authModal.onOpen();
        return;
    }

    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mb-2">
                    <h1 className="text-white text-3xl font-semibold">
                        Account
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
                        <AccountContent user={user}/>
                    </div>
                </div>
            </Header>
        </div>
    )
}

export default Account;
