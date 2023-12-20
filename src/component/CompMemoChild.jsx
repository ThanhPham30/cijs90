import { memo } from "react";

const CompMemoChild = ({ couter, user }) => {
    console.log('--->> >> >> re render')
    return (
        <div>
            <h3>{couter} {user?.username}</h3>
        </div>
    )
}

export default memo(CompMemoChild, (prevProps, nextProps) => {
    return prevProps.user.username === prevProps.user.username
});
