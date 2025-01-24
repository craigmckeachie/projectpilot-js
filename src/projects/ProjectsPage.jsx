import ProjectList from './ProjectList';
import { useProjects } from './projectHooks';

function ProjectsPage() {
  const {
    projects,
    loading,
    error,
    setCurrentPage,
    saveProject,
    saving,
    savingError,
  } = useProjects();

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <h1>Projects</h1>

      <div className="row">
        {error && (
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        )}
        {savingError && (
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {savingError}
              </p>
            </section>
          </div>
        )}
      </div>

      <ProjectList onSave={saveProject} projects={projects} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}

      {saving && <span className="toast">Saving...</span>}
    </>
  );
}
export default ProjectsPage;
