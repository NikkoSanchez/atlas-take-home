import { getDocs, type Firestore, collection } from "firebase/firestore";
import { Article } from "../../feed/FeedContainer";

export const getArticles = async (db: Firestore): Promise<Article[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Article, "id">),
    }));
    return articles;
  } catch (error) {
    throw error;
  }
};
