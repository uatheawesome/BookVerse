import dotenv from 'dotenv';
dotenv.config();
export const port = process.env.PORT || 5001
// if needed export const ApiKey = process.env.

export default {
    port
}