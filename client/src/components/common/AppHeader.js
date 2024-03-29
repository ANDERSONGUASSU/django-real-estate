import React, { useState } from "react";
import { Anchor, Button, Drawer } from "antd";
import { Link } from "react-router-dom";

function AppHeader() {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const closeDrawer = () => {
		setVisible(false);
	};

	return (
		<div className="fluid-container">
			<div className="header">
				<div className="logo">
					<i className="fas fa-home fa-2x"></i>
					<Link to="/"> Real Estate</Link>
				</div>
				<div className="mobileHidden" style={{padding: '20px'}}>
					<Anchor 
						targetOffset="65"
						direction="horizontal"
						items={[
						{
							key: 'banner',
							href: '#banner',
							title: 'Home',
						},
						{
							key: 'About',
							href: '#about',
							title: 'About',
						},
						{
							key: 'FAQ',
							href: '#faq',
							title: 'FAQ',
						},
						{
							key: 'Options',
							href: '#options',
							title: 'Options',
						},
						{
							key: 'Properties',
							href: '/properties',
							title: 'Properties',
						},
						]}
					/>
				</div>
				<div className="mobileVisible">
					<Button type="primary" onClick={showDrawer}>
						<i className="fas fa-bars"></i>
					</Button>
					<Drawer
						placement="right"
						closable={false}
						onClose={closeDrawer}
						open={visible}
					>
                        <Anchor 
							targetOffset="65"
							direction="horizontal"
							items={[
							{
								key: 'banner',
								href: '#banner',
								title: 'Home',
							},
							{
								key: 'About',
								href: '#about',
								title: 'About',
							},
							{
								key: 'FAQ',
								href: '#faq',
								title: 'FAQ',
							},
							{
								key: 'Options',
								href: '#options',
								title: 'Options',
							},
							{
								key: 'Properties',
								href: '/properties',
								title: 'Properties',
							},
							]}
						/>
                    </Drawer>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;
