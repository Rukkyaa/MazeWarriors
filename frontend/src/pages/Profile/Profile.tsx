function Profile({ isLoading }: { isLoading: boolean }) {
  if (isLoading) return <div>Loading...</div>;
  return <div>test</div>;
}

export default Profile;
