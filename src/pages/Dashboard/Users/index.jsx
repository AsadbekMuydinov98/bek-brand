import userService from './userService';
import UniversalTable from '../../../components/UniversalTable';
import { userColumns } from './helper';

const Users = () => {
  const fetchData = userService.getUsers;
  console.log(fetchData().result);

  return (
    <div>
      <UniversalTable fetchData={fetchData} columns={userColumns} />
    </div>
  );
};

export default Users;
