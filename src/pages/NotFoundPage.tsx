function NotFoundPage() {
  return (
    <div className="notfoundpage" style={{ minHeight: `calc(100vh - 73px)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ fontSize: "1.8rem", textAlign: "center", lineHeight: "3rem" }}>페이지를 찾을 수 없습니다.😭<br />
        죄송합니다.<br />
        조속한 시일내 찾아뵐 수 있도록<br />
        노력하겠습니다.😍</h2>
    </div>
  );
}

export default NotFoundPage;
