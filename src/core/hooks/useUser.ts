import { useCallback, useState } from "react";
import { User, UserService } from "tato_ap-sdk";

export default function useUser () {
    const [user, setUser] = useState<User.Detailed>()

    const fetchUser = useCallback(async function fetchUser(userId: number) {
        UserService.getDetailedUser(userId)
            .then(setUser)
    }, [])

    return {
        fetchUser,
        user
    }
}