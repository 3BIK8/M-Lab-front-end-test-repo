import axios from "axios";

const SOLUTION_API_BASE_URL = "http://localhost:8080/mlab/engineering/solution/";

class SolutionService {
    getSolutions() {
        return axios.get(SOLUTION_API_BASE_URL);
    }
}

export default new SolutionService()