import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";

function PopularRepos() {
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, [language]);

  return (
    <div>
      <div>
        <center>
          <ul className="center">
            {languages.map((language) => (
              <li key={language}>
                <button onClick={() => setLanguage(language)}>
                  {language}
                </button>
              </li>
            ))}
          </ul>
        </center>
      </div>
      {loading ? (
        <Loading text="Fetching data...." />
      ) : (
        <ul>
          <div className="flex wrap">
            {repos.map((repo, index) => {
              const {
                name,
                owner,
                html_url,
                stargazers_count,
                forks,
                open_issues,
              } = repo;
              const { login, avatar_url } = owner;
              return (
                <li key={repo.id} className="box">
                  <p>{`#${index + 1}`}</p>
                  <h2>
                    <a href={html_url}>{name}</a>
                  </h2>
                  <p>
                    <FaUser
                      color="rgb(255, 191, 116)"
                      size={22}
                      className="right"
                    />
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </p>
                  <p>
                    <FaStar
                      color="rgb(255, 215, 0)"
                      size={22}
                      className="right"
                    />
                    {stargazers_count.toLocaleString()} stars
                  </p>

                  <p>
                    <FaCodeBranch
                      color="rgb(129, 195, 245)"
                      size={22}
                      className="right"
                    />
                    {forks.toLocaleString()} forks
                  </p>
                  <p>
                    <FaExclamationTriangle
                      color="rgb(241, 138, 147)"
                      size={22}
                      className="right"
                    />
                    {open_issues.toLocaleString()} open
                  </p>
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </div>
  );
}

export default PopularRepos;
