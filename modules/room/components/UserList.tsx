import { useRoom } from '@/common/recoil/room';

const UserList = () => {
  const { users } = useRoom();

  return (
    <div className="pointer-events-none absolute z-30 flex gap-2 p-5">
      {[...users.keys()].map((userId, index) => {
        const user = users.get(userId);
        return (
          <div
            key={userId}
            className="flex h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 select-none items-center justify-center rounded-full text-lg md:text-2xl lg:text-3xl text-white border-4 border-white shadow-soft relative bg-black"
            style={{
              backgroundColor: user?.color || 'black',
              marginLeft: index !== 0 ? '-0.75rem' : 0,
            }}
          >
            <span className="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {user?.name || 'Anonymous'}
            </span>
            <span className="group cursor-pointer">{user?.name?.[0] || 'A'}</span>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
