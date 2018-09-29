<template>
    <Layout class="layout"
            width="300">
        <Sider class="layout__sider"
               width="300">
            <Tooltip content="绘制圆"
                     style="width:100%;">
                <i-button type="primary"
                          size="small"
                          long
                          @click="switchMapDrawType('circle')">
                    circle
                </i-button>
            </Tooltip>
        </Sider>

        <Content class="layout__content">
            <section id="map"></section>
        </Content>
    </Layout>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss" scoped></style>
