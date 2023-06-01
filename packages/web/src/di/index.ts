import usecases from "./useCases";
import presenters from "./presenters";
import repositories from "./repositories";
import infrastructures from "./infrastructures";

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = usecases(cRepositories);
const cPresenters = presenters(cUseCases);

export default cPresenters;
