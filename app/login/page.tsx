export type LoginPageProps = {
  title?: string
}

export const LoginPage = ({ title }: LoginPageProps) => {
  return (
    <>
      <h1>Oi</h1>
      <p>{title}</p>
    </>
  )
}
