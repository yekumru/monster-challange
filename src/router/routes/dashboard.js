export default [{
        path: '/',
        name: 'index',
        component: () =>
            import ('@/views/dashboard/Index.vue'),
    },
    {
        path: '/country-id/:id',
        name: 'country',
        component: () =>
            import ('@/views/dashboard/CountryDetail.vue'),
    },
]