<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            // ...existing middleware...
        ],

        'api' => [
            // Add Sanctum middleware here
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * Route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     */
    protected $routeMiddleware = [
        // Basic HTTP authentication
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,

        // Set cache headers
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,

        // Authorize user actions
        'can' => \Illuminate\Auth\Middleware\Authorize::class,

        // Confirm password
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,

        // Validate signed routes
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,

        // Throttle requests
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,

        // Verify email
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
    ];
}
