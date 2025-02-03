import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@shared/components/ui/card";
import { Skeleton } from "@shared/components/ui/skeleton";
import { Button } from "@shared/components/ui/button";
import { AnimatedCard } from "@shared/components/ui/animated-card";

import { useProfile } from "../hooks/useProfile";


export const ProfilePage = () => {
    const { handleLogout, isLoading, profile } = useProfile();

    return (
        <AnimatedCard keyProp="profile">
            <Card className='min-w-96'>
                <CardHeader>
                    <CardTitle className='text-xl text-center'>
                        Профиль
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className='border rounded-md mb-2 p-3'>
                        <p>Ваш Email</p>

                        {isLoading ? (
                            <Skeleton className="w-full h-6" />
                        ) : (
                            <p className="font-semibold">{profile?.email}</p>
                        )}

                    </div>
                    <div className='border rounded-md p-3'>
                        <p>Ваш ID</p>

                        {isLoading ? (
                            <Skeleton className="w-full h-6" />
                        ) : (
                            <p className='font-semibold'>{profile?.id}</p>
                        )}
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        className='w-full'
                        onClick={handleLogout}
                    >
                        Выйти
                    </Button>
                </CardFooter>
            </Card>
        </AnimatedCard>
    );
}