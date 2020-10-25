import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  FacebookFilled,
  LinkOutlined,
  QuestionCircleTwoTone,
  ReadOutlined,
  TwitterSquareFilled,
} from "@ant-design/icons";
import React from "react";
import "./styles.css";

const Divider = () => <hr style={{ border: "1px solid #ccc" }} />;

const BillCard = ({ bill }) => {
  let voteIndicator =
    bill.vote === "Yes" ? (
      <CheckCircleTwoTone twoToneColor="#52c41a" className="voteIndicator" />
    ) : bill.vote === "No" ? (
      <CloseCircleTwoTone twoToneColor="#e35d68" className="voteIndicator" />
    ) : (
      <QuestionCircleTwoTone className="voteIndicator" />
    );

  return (
    <div className="billCard">
      <div>
        <h3>{bill.title}</h3>
        <p>{bill.date}</p>
      </div>
      <div>{voteIndicator}</div>
    </div>
  );
};

const ArticleCard = ({ article }) => (<div className="articleCard">
  <ReadOutlined style={{fontSize: "50px", padding: "0 20px"}} />
  <div>
    <h3>{article.title}</h3>
    <p>{article.link}</p>
  </div>
</div>);

let bills = [
  {
    title: "Why does why why why?",
    date: "October 23, 2020",
    vote: "Yes",
  },
  {
    title: "Why does why why why?",
    date: "October 23, 2020",
    vote: "No",
  },
  {
    title: "Why does why why why?",
    date: "October 23, 2020",
    vote: "yes",
  },
  {
    title: "Why does why why why?",
    date: "October 23, 2020",
    vote: "yes",
  },
  {
    title: "Why does why why why?",
    date: "October 23, 2020",
    vote: "yes",
  },
  {
    title: "Why does why why why?",
    date: "October 23, 2020",
    vote: "yes",
  },
];

const articles = [
  {
    title: "Chris Coons looking kinda sus bro",
    date: "October 2, 2020",
    link: "https://google.com",
  },
  {
    title: "Chris Coons looking kinda sus bro",
    date: "October 2, 2020",
    link: "https://google.com",
  },
  {
    title: "Chris Coons looking kinda sus bro",
    date: "October 2, 2020",
    link: "https://google.com",
  },
  {
    title: "Chris Coons looking kinda sus bro",
    date: "October 2, 2020",
    link: "https://google.com",
  },
  {
    title: "Chris Coons looking kinda sus bro",
    date: "October 2, 2020",
    link: "https://google.com",
  },
];

function Profile() {
  return (
    <div className="profileContainer">
      <img
        src="https://theunitedstates.io/images/congress/450x550/C001088.jpg"
        alt="Chris Coons"
        className="memberImage"
      />
      <h1 className="memberName">Chris Coons (D)</h1>
      <h3 className="memberTagline">Senator - Delaware</h3>
      <div className="memberLinks">
        <a>
          <TwitterSquareFilled />
        </a>
        <a>
          <FacebookFilled />
        </a>
        <a>
          <LinkOutlined />
        </a>
      </div>

      <Divider />
      <div>
        <h1>Voting History</h1>
        <div className="billBox">
          {bills.map((b, i) => (
            <BillCard key={i} bill={b} />
          ))}
        </div>
      </div>
      <Divider />

      <div>
        <h1>Chris Coons in the News</h1>
        <div className="newsBox">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
