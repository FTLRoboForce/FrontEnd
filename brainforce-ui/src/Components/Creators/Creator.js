import { createStyles, Card, Avatar, Text, Group, Button, rem } from '@mantine/core';
import sac from './sac.png';
import kahlid from './kahlid.png';
import './Creator.css';
import { Image } from '@mantine/core';
import pennstate from "./pennstate.png"
import oj from "./oj.png"
import fiu from "./fiu.png"
import hassani from "./hassani.png"
const useStyles = createStyles((theme) => ({
  card: {
    background: `linear-gradient(to right, var(--lightgrey), var(--lightblue))`
  },
  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

export default function Creator({ image, avatar, name, job, stats }) {
  const { classes, theme } = useStyles();

  return (
    <section className='Creator-container'>

  <h2 className="divider donotcross" contenteditable>Creators</h2>


  
    <section className="Creator">

      <Card withBorder padding="xl" radius="xl" className={`${classes.card} Card-container`}>
        <Group position="center" spacing={30}>
        <Image className='college-img' src={sac}> </Image>
        </Group>

     
        <Avatar src={kahlid} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Khalid Abouelrous
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Computer Science
        </Text>
        <Group mt="md" position="center" spacing={30}>
          Software Engineer
        </Group>
        <Group mt="md" position="center" spacing={30}>
          <a target="_blank" href="https://www.linkedin.com/in/khalidabouelrous/" title="LinkedIn" class="btn btn-linkedin btn-lg">
            <i class="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </Group>
      </Card>


      <Card withBorder padding="xl" radius="xl" className={`${classes.card} Card-container`}>
        <Group position="center" spacing={30}>
        <Image className='college-img' src={pennstate}> </Image>
        </Group>

     
        <Avatar src={oj} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Oyindamola Akanbi
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Information Science & Technology
        </Text>
        <Group mt="md" position="center" spacing={30}>
          Software Engineer
        </Group>
        <Group mt="md" position="center" spacing={30}>
          <a target="_blank" href="https://www.linkedin.com/in/ojakanbi/" title="LinkedIn" class="btn btn-linkedin btn-lg">
            <i class="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </Group>
      </Card>
      <Card withBorder padding="xl" radius="xl" className={`${classes.card} Card-container`}>
        <Group position="center" spacing={30}>
        <Image className='college-img' src={fiu}> </Image>
        </Group>

     
        <Avatar src={hassani} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Wissam Hassani
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Computer Science
        </Text>
        <Group mt="md" position="center" spacing={30}>
          Software Engineer
        </Group>
        <Group mt="md" position="center" spacing={30}>
          <a target="_blank" href="https://www.linkedin.com/in/wissam-hassani/" title="LinkedIn" class="btn btn-linkedin btn-lg">
            <i class="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </Group>
      </Card>
    </section>
    </section>
  );
};
