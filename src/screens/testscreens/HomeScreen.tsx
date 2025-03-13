import { useNavigate } from "react-router";

export default function HomeScreen() {
  const nav = useNavigate();
  return (
    <view>
      <text>Home Screen</text>
      <view>
        <text bindtap={() => nav("/home")}>Navigate to Home</text>
        <text bindtap={() => nav("/profile")}>Navigate to Profile</text>
        <text bindtap={() => nav("/")}>Navigate to Menu (this page)</text>
        <text bindtap={() => nav("/template")}>Navigate to Template</text>
      </view>
    </view>
  );
}
