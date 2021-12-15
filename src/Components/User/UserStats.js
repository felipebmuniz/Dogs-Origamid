import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import react from 'react';
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphics from './UserStatsGraphics';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  react.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) <Loading />;
  if (error) <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphics data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
