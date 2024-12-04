import { useFetchProjects } from '../fetchData';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  // const { projects } = useFetch();

  if (loading) {
    return <div className='loading' style={{ marginTop: '7rem' }}></div>;
  }

  return (
    <section className='projects'>
      <h2 className='title'>projects</h2>
      <div className='title-underline'></div>

      <div className='projects-center'>
        {projects.map((item) => {
          return (
            <a
              key={item.id}
              href={item.url}
              className='project'
              target='_blank'
            >
              <img src={item.img} alt={item.title} className='img' />
              <h5>{item.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
