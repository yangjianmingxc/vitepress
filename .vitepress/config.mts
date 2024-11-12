/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2024-07-03 14:43:14
 */
import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '<YangJianMing />',
    description: '一些知识梳理',
    srcDir: './docs',
    markdown: {
        toc: {
            level: [2, 3, 4], // 控制目录包含的标题层级，默认为 [2, 3]
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            light: '/logo-light.png', // 浅色模式徽标路径
            dark: '/logo-dark.png',
        },
        search: {
            provider: 'local',
        },
        nav,
        sidebar,
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
})
