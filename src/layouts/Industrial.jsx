import { Card,Image,Tooltip,CardHeader,CardBody,CardFooter,Divider,Link,Spinner } from "@heroui/react";
import { useEffect,useState } from "react"; 
import { motion } from "framer-motion";
function Industry(){

    const [articles, setArticles] = useState([]);
      var URL = 'https://newsapi.org/v2/everything?q=apple&from=2025-01-29&to=2025-01-29&sortBy=popularity&apiKey=fad69300e628408b848d23759c9d1440'
      var REQ = new Request(URL);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(REQ);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setArticles(data.articles);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);

    return(
        <>
        <motion.div className="flex flex-row gap-1 w-full h-16 bg-gray-950 items-center justify-center text-2xl">
            <p className="font-Akira tracking-widest text-white"><span className="text-red-500">INDUSTRIAL</span> NEWS</p>
        </motion.div>
        <motion.div className="flex flex-col gap-2 p-2 bg-slate-300">
            {
            articles.length > 0 ? (
                articles.map((article, idx) => (
                  <Card key={idx} className="z-0">
                    <CardHeader className="flex flex-col items-start">
                      <h2 className="text-xl">{article.title}</h2>
                      <p className="text-tiny">{article.author}</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                    <p>{article.description || "No description available."}</p>
                   
                    {article.urlToImage && (
                      <Image
                        src={article.urlToImage}
                        alt={article.title}
                        width={400}
                        className="mt-4 "
                      />
                    )}
                    <Tooltip content="Read More on External Site" showArrow={true}>
                    <p>{article.content}</p>
                    </Tooltip>
                    <Link showAnchorIcon isExternal href={article.url} size="sm" >
                      Read More
                    </Link>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex flex-col items-start font-sans">
                    <p><strong>Author:</strong><span className="italic">  --{article.author || "Unknown"}</span></p>
                    <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
                    </CardFooter>
                  </Card>
                ))) : (
                    <div className="h-[100vh] flex items-center justify-center"><Spinner/></div>
                  )}
        </motion.div>
        </>
    )

}
export default Industry;