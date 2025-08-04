import chefClaudeLogo from "../assets/chef-claude-logo.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef claude logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}