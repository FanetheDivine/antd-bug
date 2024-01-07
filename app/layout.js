// 'use client'
// 上面这个取消注释就正常了
import { ConfigProvider, theme } from 'antd'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>{children}</ConfigProvider>
			</body>
		</html>
	)
}
