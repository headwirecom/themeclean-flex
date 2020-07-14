var Analytics = _analytics.init({
    app: 'YOUR-SITE',
    plugins: [
        {
          name: 'console-plugin',
          track: ({ payload}) => { console.log(payload) }
        },
        analyticsPerfumeJs({
            perfume: Perfume,
            category: 'perfMetrics'
        }),
        analyticsGa.init({
           trackingId: 'YOUR-GOOGLE-TRACKING-ID'    
        })
    ]
 })
