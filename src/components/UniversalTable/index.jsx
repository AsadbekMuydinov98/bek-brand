import { useEffect, useState } from 'react';
import { Table, Spin, message } from 'antd';

const UniversalTable = ({ fetchData, columns }) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        message.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [fetchData, data]);

  if (loading) {
    return <Spin />;
  }

  return (
    <Table dataSource={data} columns={columns} rowKey="_id" />
  );
};

export default UniversalTable;
