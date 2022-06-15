import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Title from '../../components/Title';
import LabelParagraph from '../../components/LabelParagraph';
import { GetSchedulersRoom } from '../../api/wtmi';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { MomentSpeed } from '../../util/date';
import NotFound from '../../components/NotFound';
import Preloader from '../../components/Preloader';

const useStyles = makeStyles(styles);

export interface ISchedulersRoom {
  _id: string;
  code: number;
  title: string;
  initialDate: string;
  finalDate: string;
  location: string;
  users: {
    name: string;
    email: string;
  }[];
}

const SchedulersRoom: React.FC = () => {
  const classes = useStyles();

  const { id: nameRoom } = useParams();

  const [schedulers, setSchedulers] = useState<ISchedulersRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getSchedulersRoom() {
    try {
      const { data } = await GetSchedulersRoom(nameRoom);
      setIsLoading(false);
      setSchedulers(data.scheduler);
    } catch (error: any | AxiosError) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSchedulersRoom();
  }, []);

  const dateNow = MomentSpeed().format('DD/MM/YYYY');

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Container>
      <Header />
      {schedulers.length ? (
        <section className={classes.container}>
          <Title style={{ margin: 0, marginBottom: 10 }}>
            Palestras {nameRoom}
          </Title>
          <LabelParagraph label="Data" style={{ marginTop: 0 }}>
            {dateNow}
          </LabelParagraph>

          <section className={classes.containerCard}>
            {schedulers?.map((scheduler) => (
              <Card data={scheduler} key={scheduler['_id']} />
            ))}
          </section>
        </section>
      ) : (
        <NotFound />
      )}
    </Container>
  );
};

export default SchedulersRoom;
