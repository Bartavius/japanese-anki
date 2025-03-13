import { useNavigate } from "react-router";
import "./ProfileScreen.css";

export default function ProfileScreen() {
  const nav = useNavigate();
  return (
    <view>
      <text>Profile Screen</text>
      <view>
        <text className="styled-text-test" bindtap={() => nav("/home")}>
          Navigate to Home
        </text>
        <text className="text-blue-600" bindtap={() => nav("/profile")}>Navigate to Profile</text>
        <text bindtap={() => nav("/")}>Navigate to Menu (this page)</text>
        <text bindtap={() => nav("/template")}>Navigate to Template</text>
      </view>
    </view>
  );
}
