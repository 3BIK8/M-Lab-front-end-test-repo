import axios from 'axios';

const BASE_URL = 'http://localhost:8080/mlab/engineering/contact';

const ContactFormService = {
    sendEmail: async (formData) => {
        try {
            const response = await axios.post(`${BASE_URL}/submit`, formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default ContactFormService;
