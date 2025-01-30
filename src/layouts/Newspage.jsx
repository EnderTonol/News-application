import { useState, useEffect } from "react";
import { Card,CardHeader,CardFooter,CardBody,Divider,Button,ButtonGroup,Image,Link,Tooltip,Spinner } from '@heroui/react';
function NEWS() {
  const [articles, setArticles] = useState([]);
  var URL = 'https://newsapi.org/v2/everything?' +
  'country=us'
  'apiKey=fad69300e628408b848d23759c9d1440';
  // 'https://newsapi.org/v2/top-headlines?q=bitcoin&apiKey=fad69300e628408b848d23759c9d1440'
  // 'country=us&' +
  var REQ = new Request(URL)
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
   

  return (
    <>
      <div className="flex flex-col gap-2 p-2">
        {articles.length > 0 ? (
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
              <p><strong>Source:</strong> {article.source.name || "Unknown"}</p>
              <p><strong>Author:</strong><span className="italic">  --{article.author || "Unknown"}</span></p>
              <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="h-[100vh] flex items-center justify-center"><Spinner/></div>
        )}
      </div>
    </>
  );
}

export default NEWS;
