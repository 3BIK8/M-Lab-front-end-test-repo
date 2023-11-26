import axios from 'axios';

const BASE_URL = 'http://localhost:8080/mlab/engineering/formation';

const FormationFormService = {
    postulateFormationForm: async (formData) => {
        try {
            const response = await axios.post(`${BASE_URL}/postulate`, formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default FormationFormService;