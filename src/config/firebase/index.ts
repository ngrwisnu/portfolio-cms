import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  projectId: process.env.PROJECT_ID,
  databaseURL: process.env.DATABASE_URL,
};

const gfApp = initializeApp(firebaseConfig);

export const gfDatabase = getDatabase(gfApp);
