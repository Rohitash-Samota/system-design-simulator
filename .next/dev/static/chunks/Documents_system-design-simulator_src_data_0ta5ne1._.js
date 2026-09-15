(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/system-design-simulator/src/data/problems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROBLEMS",
    ()=>PROBLEMS,
    "getProblemById",
    ()=>getProblemById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/customProblemsStore.ts [app-client] (ecmascript)");
;
const PROBLEMS = [
    {
        id: "url-shortener",
        title: "URL Shortener",
        difficulty: "Easy",
        description: "Design a URL shortening service like Bitly or TinyURL. Users submit long URLs and receive short, unique aliases that redirect to the original destination. The system is heavily read-biased — for every URL created, expect 100x more redirect lookups. Real-world services like Bitly handle billions of redirects per month with sub-100ms latency, making caching strategy the key design decision.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 1000,
            storageGB: 75000,
            latencyMs: 100,
            users: "100M DAU"
        },
        constraints: [
            "Short codes must be unique and non-enumerable — use random key generation or a Key Generation Service rather than base62-encoding a sequential counter (predictable/enumerable)",
            "Redirect latency < 100ms at p99 — users should not notice any delay",
            "System should handle 100:1 read/write ratio",
            "URLs should expire after a configurable TTL (default 5 years)",
            "Analytics tracking for click counts, geographic distribution, and referrer data",
            "Custom alias support — users can choose their own short URL slug",
            "Rate limiting to prevent abuse (e.g., max 100 URLs/min per API key)"
        ],
        hints: [
            {
                title: "Start with the basics",
                content: "Consider DNS → Load Balancer → App Server → Database as your starting flow."
            },
            {
                title: "301 vs 302 redirects",
                content: "A 301 (permanent) redirect is cached by browsers, so repeat clicks skip your servers entirely — less load, but you lose visibility into those clicks, which kills analytics. A 302 (temporary) redirect forces every hit through your service, so you can count clicks and capture referrer/geo data at the cost of more traffic. Choose based on whether click analytics is a core requirement."
            },
            {
                title: "Think about reads",
                content: "Most requests are reads (redirects). A cache layer can dramatically reduce DB load. Watch for cache stampede on hot links: when a viral link's cache entry expires, thousands of concurrent requests hit the DB simultaneously. Mitigate with request coalescing (only one request refills the cache while the rest wait on it) and TTL jitter (randomize expiry so hot entries don't all expire at once)."
            },
            {
                title: "Key generation strategies",
                content: "Compare three approaches: (1) base62-encoding an auto-increment counter — simple and collision-free, but sequential, so short codes are predictable and enumerable; (2) random keys — non-enumerable, but each insert must handle collisions; (3) a Key Generation Service that pre-generates random keys offline — non-enumerable AND collision-free at write time."
            },
            {
                title: "Scaling writes",
                content: "Use a NoSQL database or partition your SQL database by key hash for write scaling."
            },
            {
                title: "Advanced: Key generation",
                content: "Pre-generate keys in a separate Key Generation Service (KGS) to avoid collision checks at write time. Store unused keys in a dedicated table and move them to a 'used' table atomically."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 100,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 300,
                    y: 100
                },
                {
                    componentId: "load-balancer",
                    x: 300,
                    y: 250
                },
                {
                    componentId: "rate-limiter",
                    x: 300,
                    y: 400
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 100
                },
                {
                    componentId: "id-generator",
                    x: 500,
                    y: 400
                },
                {
                    componentId: "nosql-db",
                    x: 700,
                    y: 250
                },
                {
                    componentId: "monitoring",
                    x: 700,
                    y: 100
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "load-balancer",
                    target: "rate-limiter"
                },
                {
                    source: "rate-limiter",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "id-generator"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Storage",
            "Caching",
            "Hashing"
        ]
    },
    {
        id: "twitter-feed",
        title: "Twitter / News Feed",
        difficulty: "Hard",
        description: "Design a social media feed like Twitter (X). Users can post tweets, follow others, and see a personalized timeline ranked by relevance. The core challenge is fan-out: when a celebrity with 50M followers posts a tweet, how do you deliver it to all their followers' timelines without melting your infrastructure? Real systems like Twitter use a hybrid approach — pre-computing timelines for most users while handling high-follower accounts differently. Expect roughly 250M DAU producing ~500M tweets per day (≈6K writes/sec) and a 100:1 read ratio on timelines (≈600K reads/sec).",
        requirements: {
            readsPerSec: 600000,
            writesPerSec: 6000,
            storageGB: 500000,
            latencyMs: 200,
            users: "250M DAU"
        },
        constraints: [
            "Timeline should be eventually consistent within 5 seconds of a new post",
            "Support users with millions of followers (celebrities) without write amplification storms",
            "Feed should rank by relevance using signals like recency, engagement, and relationship strength",
            "Media uploads (images/videos up to 512MB) must be supported with async processing",
            "Real-time notifications for mentions, likes, retweets, and DMs",
            "Full-text search across all public tweets with sub-second response time",
            "Graceful degradation — serve stale timelines rather than showing errors during peak load"
        ],
        hints: [
            {
                title: "Fan-out strategy",
                content: "Consider fan-out-on-write for normal users and fan-out-on-read for celebrities."
            },
            {
                title: "Caching the timeline",
                content: "Pre-compute and cache each user's timeline in Redis. Update on new posts."
            },
            {
                title: "Media handling",
                content: "Use object storage (S3) for media with a CDN for global delivery."
            },
            {
                title: "Snowflake IDs for time-ordering",
                content: "Use Snowflake IDs for tweet IDs: a 64-bit ID composed of a 41-bit timestamp, 10-bit machine ID, and 12-bit sequence number. Because the timestamp occupies the high bits, IDs sort chronologically — sorting a timeline by ID IS sorting by creation time, with no separate timestamp index. Each node generates IDs independently with no central coordination."
            },
            {
                title: "Cursor-based pagination",
                content: "Paginate timelines with cursors, not OFFSET/LIMIT. Offsets break when new tweets arrive mid-scroll (items shift, causing duplicates or gaps) and get slower as the offset grows. Instead, the client sends the last tweet ID it saw and the server returns tweets where id < cursor — stable under inserts, constant cost per page, and a perfect fit with time-sorted Snowflake IDs."
            },
            {
                title: "Advanced: Hybrid fan-out",
                content: "Set a follower threshold (e.g., 10K). Below it, fan-out-on-write pushes to followers' cached timelines. Above it, fan-out-on-read merges celebrity tweets at read time. This gives you the best of both approaches."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 200
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 50
                },
                {
                    componentId: "pub-sub",
                    x: 500,
                    y: 380
                },
                {
                    componentId: "sql-db",
                    x: 700,
                    y: 200
                },
                {
                    componentId: "nosql-db",
                    x: 700,
                    y: 380
                },
                {
                    componentId: "object-storage",
                    x: 350,
                    y: 80
                },
                {
                    componentId: "search",
                    x: 700,
                    y: 50
                },
                {
                    componentId: "monitoring",
                    x: 850,
                    y: 200
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "pub-sub"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "pub-sub",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Fan-out",
            "Cache",
            "Timeline"
        ]
    },
    {
        id: "chat-system",
        title: "Chat System",
        difficulty: "Hard",
        description: "Design a real-time chat application like WhatsApp, Slack, or Discord. Support 1:1 messaging, group chats with up to 1000 members, read receipts, typing indicators, and online presence. Messages must be delivered reliably and in order, even when users switch between devices. WhatsApp processes over 140 billion messages per day — the key challenges are maintaining persistent connections at scale and achieving effectively-once delivery (at-least-once delivery plus client-side dedup via message IDs — true exactly-once delivery is impossible in a distributed system).",
        requirements: {
            readsPerSec: 200000,
            writesPerSec: 100000,
            storageGB: 50000,
            latencyMs: 50,
            users: "200M DAU"
        },
        constraints: [
            "Messages delivered in under 50ms for online users via persistent WebSocket connections",
            "Guaranteed message ordering within a conversation using sequence numbers",
            "Offline message delivery when user comes back online (store-and-forward pattern)",
            "Support group chats with up to 1000 members with efficient fan-out",
            "End-to-end encryption for 1:1 chats (server should never see plaintext)",
            "Read receipts and typing indicators with minimal overhead (no DB writes for ephemeral events)",
            "Multi-device sync — messages appear on all logged-in devices simultaneously"
        ],
        hints: [
            {
                title: "WebSocket connections",
                content: "Use persistent WebSocket connections for real-time delivery. Need a connection gateway."
            },
            {
                title: "Message ordering",
                content: "Use a message queue with per-conversation partitioning to guarantee ordering."
            },
            {
                title: "Presence system",
                content: "Use Redis with TTL keys for online/offline status. Heartbeat every 30 seconds."
            },
            {
                title: "Advanced: Connection management",
                content: "Use a dedicated WebSocket gateway layer that maintains millions of persistent connections. Store connection-to-server mappings in Redis so any app server can route a message to the correct gateway holding the recipient's connection."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "websocket-server",
                    x: 200,
                    y: 100
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 180
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 50
                },
                {
                    componentId: "message-queue",
                    x: 500,
                    y: 350
                },
                {
                    componentId: "nosql-db",
                    x: 700,
                    y: 250
                },
                {
                    componentId: "monitoring",
                    x: 700,
                    y: 50
                },
                {
                    componentId: "rate-limiter",
                    x: 50,
                    y: 100
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "rate-limiter"
                },
                {
                    source: "load-balancer",
                    target: "websocket-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "WebSocket",
            "Messaging",
            "Real-time"
        ]
    },
    {
        id: "ride-sharing",
        title: "Uber / Ride Sharing",
        difficulty: "Hard",
        description: "Design a ride-sharing platform like Uber or Lyft. Match riders with nearby drivers in real-time, track live location updates, calculate accurate ETAs, and handle dynamic surge pricing. The system must ingest millions of location updates per second from active drivers while simultaneously running proximity queries to match riders. Uber processes hundreds of thousands of location updates per second during peak hours, making geospatial indexing and real-time stream processing the central design challenges.",
        requirements: {
            readsPerSec: 80000,
            writesPerSec: 300000,
            storageGB: 1000,
            latencyMs: 100,
            users: "50M DAU"
        },
        constraints: [
            "Driver matching within 5 seconds using geospatial proximity search",
            "Location updates every 4 seconds from all active drivers (~1M concurrent drivers)",
            "ETA accuracy within 20% of actual using real-time traffic and historical data",
            "Surge pricing computed in real-time per geo zone based on supply/demand ratios",
            "Trip history and receipts stored permanently for regulatory compliance",
            "Payment processing with idempotent charge guarantees (no double-charging)",
            "Graceful handling of driver/rider disconnections mid-trip without data loss"
        ],
        hints: [
            {
                title: "Geo-spatial indexing",
                content: "Use geohashing or a spatial index to efficiently find nearby drivers."
            },
            {
                title: "Location ingestion",
                content: "High-frequency location updates need a message queue to buffer writes."
            },
            {
                title: "Matching service",
                content: "A dedicated matching service queries the spatial index and assigns the optimal driver."
            },
            {
                title: "Advanced: Geohash sharding",
                content: "Partition your driver location data by geohash prefix so each shard handles a geographic region. This lets proximity queries hit a single shard instead of scanning globally. Use Redis Geo commands (GEOADD/GEOSEARCH) for O(log N) nearest-neighbor lookups."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 120
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 400
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 120
                },
                {
                    componentId: "message-queue",
                    x: 500,
                    y: 400
                },
                {
                    componentId: "stream-processor",
                    x: 650,
                    y: 400
                },
                {
                    componentId: "geospatial-index",
                    x: 850,
                    y: 400
                },
                {
                    componentId: "nosql-db",
                    x: 700,
                    y: 250
                },
                {
                    componentId: "sql-db",
                    x: 700,
                    y: 120
                },
                {
                    componentId: "monitoring",
                    x: 850,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "rate-limiter"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "stream-processor",
                    target: "nosql-db"
                },
                {
                    source: "stream-processor",
                    target: "geospatial-index"
                },
                {
                    source: "app-server",
                    target: "geospatial-index"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Geo-spatial",
            "Real-time",
            "Matching"
        ]
    },
    {
        id: "video-streaming",
        title: "YouTube / Video Streaming",
        difficulty: "Hard",
        description: "Design a video streaming platform like YouTube or Netflix. Support video upload, transcoding into multiple formats and resolutions, globally distributed storage, and adaptive bitrate streaming to millions of concurrent viewers. YouTube serves over 1 billion hours of video daily — the key challenges are building an efficient upload-transcode-serve pipeline, leveraging CDN edge caching for popular content, and separating the fast metadata path from the slow video delivery path.",
        requirements: {
            readsPerSec: 200000,
            writesPerSec: 5000,
            storageGB: 1000000,
            latencyMs: 1000,
            users: "~2.5B MAU"
        },
        constraints: [
            "Videos transcoded into multiple resolutions (360p, 720p, 1080p, 4K) and codecs (H.264, VP9, AV1)",
            "Adaptive bitrate streaming (HLS/DASH) adjusts quality based on real-time bandwidth",
            "Global delivery with < 1s video start time at the 95th percentile",
            "Support live streaming with < 5s glass-to-glass latency",
            "Recommendations engine producing personalized feeds from billions of videos",
            "Upload processing pipeline handles videos up to 256GB with resumable uploads",
            "Copyright detection (Content ID) must scan uploaded content before it goes live"
        ],
        hints: [
            {
                title: "Upload pipeline",
                content: "Upload to object storage, then use a message queue to trigger async transcoding workers."
            },
            {
                title: "CDN is critical",
                content: "A CDN is essential for serving video content globally. Cache popular videos at the edge."
            },
            {
                title: "Metadata vs video",
                content: "Separate video metadata (SQL/NoSQL) from video content (object storage + CDN)."
            },
            {
                title: "Advanced: Tiered storage",
                content: "Use hot/warm/cold storage tiers. Popular videos stay on CDN edge and fast object storage. Videos older than 30 days with low views move to cheaper infrequent-access storage (S3 IA / Glacier). This can cut storage costs by 60-70% without affecting user experience."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 100
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 500,
                    y: 400
                },
                {
                    componentId: "stream-processor",
                    x: 600,
                    y: 400
                },
                {
                    componentId: "object-storage",
                    x: 700,
                    y: 100
                },
                {
                    componentId: "sql-db",
                    x: 700,
                    y: 250
                },
                {
                    componentId: "search",
                    x: 700,
                    y: 400
                },
                {
                    componentId: "monitoring",
                    x: 850,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "rate-limiter"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "stream-processor",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Streaming",
            "CDN",
            "Transcoding"
        ]
    },
    {
        id: "rate-limiter",
        title: "Rate Limiter",
        difficulty: "Easy",
        description: "Design a distributed rate limiting service that throttles API requests per client, IP, or API key. Real systems like Cloudflare and AWS WAF use token bucket or sliding window algorithms backed by distributed counters in Redis. The key challenge is achieving consistency across multiple rate limiter instances without adding significant latency to the request path — Stripe processes hundreds of millions of API calls per day while enforcing per-key rate limits with sub-millisecond overhead.",
        requirements: {
            readsPerSec: 50000,
            writesPerSec: 50000,
            storageGB: 10,
            latencyMs: 5,
            users: "50M DAU"
        },
        constraints: [
            "Sub-millisecond decision latency — rate limiting must not become a bottleneck itself",
            "Support multiple limiting algorithms: token bucket, sliding window log, sliding window counter",
            "Distributed counting across multiple instances using Redis with atomic operations (INCR + EXPIRE)",
            "Per-client, per-endpoint, and global rate limits with configurable thresholds",
            "Graceful handling of Redis failures — fail open vs fail closed configurable per rule",
            "Return standard HTTP 429 with Retry-After header and remaining quota in response headers",
            "Support burst allowance — allow short traffic spikes above the sustained rate limit"
        ],
        hints: [
            {
                title: "Start simple",
                content: "Begin with an API Gateway fronting app servers. Rate limit checks happen before business logic."
            },
            {
                title: "Distributed counters",
                content: "Use Redis with INCR + EXPIRE for atomic counter updates across all instances. Lua scripts ensure atomicity."
            },
            {
                title: "Sliding window",
                content: "A sliding window counter using two fixed windows with weighted counts gives accuracy without the memory cost of a full log."
            },
            {
                title: "Advanced: Local + global",
                content: "Use a two-tier approach: local in-memory counters for hot-path speed with periodic sync to Redis for global consistency. This reduces Redis round-trips by 90% while keeping limits accurate within a small margin."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 500,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 650,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "monitoring",
                    x: 650,
                    y: 100
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "rate-limiter"
                },
                {
                    source: "rate-limiter",
                    target: "api-gateway"
                },
                {
                    source: "rate-limiter",
                    target: "cache"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Distributed",
            "Algorithm",
            "Redis"
        ]
    },
    {
        id: "notification-system",
        title: "Notification System",
        difficulty: "Medium",
        description: "Design a scalable notification service like Firebase Cloud Messaging or AWS SNS that delivers push notifications, emails, and SMS to hundreds of millions of users. The system must handle priority-based routing, template rendering, delivery tracking, and retry logic across multiple channels. Firebase Cloud Messaging delivers over 1 trillion messages per week — the key challenges are fan-out at scale, rate limiting per channel, and maintaining delivery guarantees without overwhelming downstream providers.",
        requirements: {
            readsPerSec: 50000,
            writesPerSec: 100000,
            storageGB: 2000,
            latencyMs: 500,
            users: "500M DAU"
        },
        constraints: [
            "Support push (iOS/Android/Web), email, and SMS delivery channels with pluggable providers",
            "Priority queue system — critical alerts (security, payments) jump ahead of marketing notifications",
            "Template engine with variable substitution and localization (100+ languages)",
            "At-least-once delivery with deduplication to prevent duplicate notifications to users",
            "Per-user notification preferences and opt-out management across all channels",
            "Delivery tracking with read receipts, bounce handling, and delivery status webhooks",
            "Rate limiting per provider to avoid being throttled by APNS, FCM, email gateways, or SMS providers"
        ],
        hints: [
            {
                title: "Event-driven architecture",
                content: "Use a message queue to decouple notification producers from the delivery pipeline. Events trigger notification creation."
            },
            {
                title: "Priority queues",
                content: "Use separate message queues or priority lanes for critical vs marketing notifications to prevent backlog delays."
            },
            {
                title: "Template and preferences",
                content: "Store templates and user preferences in a cache layer for fast lookup during high-volume sends."
            },
            {
                title: "Advanced: Fan-out workers",
                content: "Use a worker pool pattern: a dispatcher reads from the priority queue, resolves user preferences, renders templates, then fans out to channel-specific workers (push worker, email worker, SMS worker). Each worker handles retries and provider-specific rate limits independently."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 200
                },
                {
                    componentId: "message-queue",
                    x: 500,
                    y: 380
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 60
                },
                {
                    componentId: "notification-service",
                    x: 700,
                    y: 470
                },
                {
                    componentId: "nosql-db",
                    x: 700,
                    y: 200
                },
                {
                    componentId: "sql-db",
                    x: 700,
                    y: 380
                },
                {
                    componentId: "monitoring",
                    x: 850,
                    y: 200
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 100
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "notification-service"
                },
                {
                    source: "notification-service",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                },
                {
                    source: "api-gateway",
                    target: "rate-limiter"
                }
            ]
        },
        tags: [
            "Push",
            "Queue",
            "Fanout"
        ]
    },
    {
        id: "typeahead-autocomplete",
        title: "Typeahead / Autocomplete",
        difficulty: "Medium",
        description: "Design a search autocomplete system like Google's search suggestions or Algolia's instant search. As users type each character, the system returns the top 5-10 matching suggestions ranked by popularity, personalization, and recency within 100ms. Google processes over 8.5 billion searches per day with autocomplete triggering on every keystroke — the core challenges are building an efficient prefix-matching data structure (trie) and keeping suggestions fresh as search trends change in real-time.",
        requirements: {
            readsPerSec: 400000,
            writesPerSec: 5000,
            storageGB: 100,
            latencyMs: 50,
            users: "500M+ DAU, ~8.5B searches/day"
        },
        constraints: [
            "Response time under 50ms at p99 — suggestions must appear as the user types each character",
            "Top-K results ranked by query frequency, recency, and optional personalization signals",
            "Support prefix matching and fuzzy matching (handle typos with edit distance ≤ 2)",
            "Real-time trend updates — breaking news or viral topics should appear within minutes",
            "Multi-language support with proper Unicode handling and transliteration",
            "Filter offensive or inappropriate suggestions before returning results",
            "Personalized suggestions based on user search history when available"
        ],
        hints: [
            {
                title: "Trie data structure",
                content: "Use a trie (prefix tree) to efficiently store and query prefix matches. Each node stores the top-K suggestions for that prefix."
            },
            {
                title: "Caching is critical",
                content: "Cache the most popular prefixes (1-3 characters) aggressively — they account for the majority of queries."
            },
            {
                title: "Offline aggregation",
                content: "Use a message queue to collect search logs, then batch-process to update suggestion rankings periodically."
            },
            {
                title: "Advanced: Two-tier approach",
                content: "Serve from an in-memory trie on the app servers for ultra-low latency, backed by a distributed cache (Redis) for longer prefixes. Use a background pipeline that aggregates search logs, computes new rankings, and rebuilds the trie every 15 minutes."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 100
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 400,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 400,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 400,
                    y: 400
                },
                {
                    componentId: "nosql-db",
                    x: 600,
                    y: 250
                },
                {
                    componentId: "search",
                    x: 600,
                    y: 100
                },
                {
                    componentId: "monitoring",
                    x: 800,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Trie",
            "Search",
            "Caching"
        ]
    },
    {
        id: "web-crawler",
        title: "Web Crawler",
        difficulty: "Medium",
        description: "Design a distributed web crawler like Googlebot that can crawl billions of web pages efficiently. The crawler must manage a URL frontier, respect robots.txt politeness policies, deduplicate content, and handle the enormous variety of web page structures. Google's crawler discovers and indexes trillions of URLs and maintains an index of over 400 billion pages — the key design decisions involve URL prioritization, politeness (not overwhelming any single domain), and distributed coordination to avoid redundant crawls.",
        requirements: {
            readsPerSec: 10000,
            writesPerSec: 50000,
            storageGB: 50000,
            latencyMs: 1000,
            users: "N/A (internal system)"
        },
        constraints: [
            "Crawl rate of 1000+ pages per second across the entire cluster",
            "Respect robots.txt and per-domain crawl delays — never overwhelm a single website",
            "URL deduplication using content hashing (SimHash/MinHash) to detect near-duplicate pages",
            "URL frontier with priority queue — prioritize important/fresh pages over deep/stale ones",
            "Handle DNS resolution caching to avoid repeated lookups for the same domain",
            "Graceful handling of spider traps (infinite URL generation, redirect loops, soft 404s)",
            "Incremental re-crawling based on page change frequency (adaptive crawl scheduling)"
        ],
        hints: [
            {
                title: "URL frontier design",
                content: "Use a message queue as your URL frontier with priority levels. Separate front queues (priority) from back queues (politeness/per-host)."
            },
            {
                title: "Deduplication",
                content: "Use a Bloom filter or content hash stored in a NoSQL database to quickly check if a URL or page content has been seen before."
            },
            {
                title: "Distributed workers",
                content: "Multiple crawler workers pull URLs from the frontier, fetch pages, extract links, and push new URLs back. Partition by domain for politeness."
            },
            {
                title: "Advanced: DNS cache + politeness",
                content: "Maintain a local DNS cache (TTL-based) on each crawler worker to reduce DNS overhead. Implement per-domain rate limiters in Redis — each worker checks the domain's last crawl timestamp before fetching. This prevents any single domain from being overwhelmed even with hundreds of workers."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "message-queue",
                    x: 100,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 300,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 300,
                    y: 100
                },
                {
                    componentId: "rate-limiter",
                    x: 300,
                    y: 400
                },
                {
                    componentId: "nosql-db",
                    x: 550,
                    y: 250
                },
                {
                    componentId: "object-storage",
                    x: 550,
                    y: 100
                },
                {
                    componentId: "search",
                    x: 550,
                    y: 400
                },
                {
                    componentId: "monitoring",
                    x: 750,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "message-queue",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "rate-limiter"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "nosql-db",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Distributed",
            "Queue",
            "Storage"
        ]
    },
    {
        id: "distributed-cache",
        title: "Distributed Cache",
        difficulty: "Medium",
        description: "Design a distributed in-memory caching system like Redis or Memcached. The system must support key-value storage with sub-millisecond reads, consistent hashing for data distribution, multiple eviction policies, and replication for fault tolerance. Redis can serve hundreds of thousands to over 1 million requests per second per node on optimized hardware — the key challenges are maintaining cache coherence across nodes, handling hot keys that receive disproportionate traffic, and designing a partition strategy that minimizes data movement during scaling events.",
        requirements: {
            readsPerSec: 500000,
            writesPerSec: 100000,
            storageGB: 500,
            latencyMs: 2,
            users: "N/A (infrastructure)"
        },
        constraints: [
            "Sub-millisecond read latency at p99 with support for 1M+ ops/sec per node",
            "Consistent hashing with virtual nodes for even data distribution and minimal remapping on scale events",
            "Multiple eviction policies: LRU, LFU, TTL-based, and random eviction",
            "Primary-replica replication with configurable consistency (async for speed, sync for safety)",
            "Hot key detection and mitigation — replicate hot keys across multiple nodes",
            "Support for data structures beyond key-value: lists, sets, sorted sets, hash maps",
            "Cluster health monitoring with automatic failover when a primary node goes down"
        ],
        hints: [
            {
                title: "Consistent hashing",
                content: "Use consistent hashing with virtual nodes to map keys to cache servers. This minimizes key redistribution when adding/removing nodes."
            },
            {
                title: "Replication",
                content: "Each primary node replicates to 1-2 replicas. On primary failure, promote a replica using leader election."
            },
            {
                title: "Eviction policies",
                content: "Implement LRU using a doubly-linked list + hash map for O(1) eviction. Support configurable policies per cache namespace."
            },
            {
                title: "Advanced: Hot key handling",
                content: "Detect hot keys by sampling access patterns. When a key exceeds a threshold (e.g., 1000 QPS), automatically replicate it to all nodes and route reads using client-side random selection. This distributes the load of celebrity-profile-style hot keys."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 400,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 600,
                    y: 250
                },
                {
                    componentId: "monitoring",
                    x: 800,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Hashing",
            "Replication",
            "Memory"
        ]
    },
    {
        id: "payment-system",
        title: "Payment System",
        difficulty: "Hard",
        description: "Design a payment processing platform like Stripe or PayPal. The system handles payment authorization, capture, settlement, refunds, and ledger management with strict financial consistency guarantees. Stripe processes over $1.4 trillion annually (2024) — the core challenges are ensuring effectively-once (idempotent) payment execution — idempotency keys make at-least-once retries safe, preventing double-charges, maintaining a double-entry accounting ledger, and handling the complex state machine of payment lifecycles across multiple payment processors and methods.",
        requirements: {
            readsPerSec: 30000,
            writesPerSec: 10000,
            storageGB: 5000,
            latencyMs: 200,
            users: "10M merchants"
        },
        constraints: [
            "Effectively-once (idempotent) payment execution — idempotency keys make at-least-once retries safe, preventing double-charges under any failure scenario",
            "Double-entry accounting ledger — every transaction creates balanced debit and credit entries",
            "Support multiple payment methods: credit cards, bank transfers, digital wallets, crypto",
            "PCI DSS compliance — card numbers must be tokenized and never stored in plaintext",
            "Reconciliation system that matches internal records with bank settlement files daily",
            "Dispute/chargeback handling workflow with evidence submission and deadline tracking",
            "Multi-currency support with real-time exchange rates and proper rounding (banker's rounding)"
        ],
        hints: [
            {
                title: "Idempotency is everything",
                content: "Every payment API call must include an idempotency key. Store the key and result so retries return the same response without re-executing."
            },
            {
                title: "Payment state machine",
                content: "Model payments as a state machine: created → authorized → captured → settled (or refunded). Store every state transition."
            },
            {
                title: "Ledger design",
                content: "Use a SQL database with ACID transactions for the ledger. Every operation creates two rows: a debit and a credit that sum to zero."
            },
            {
                title: "Advanced: Saga pattern",
                content: "Use the saga pattern for multi-step payments (authorize → fraud check → capture → settle). Each step has a compensating action (e.g., void authorization). A message queue coordinates steps, and failed steps trigger compensating transactions in reverse order."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 100
                },
                {
                    componentId: "distributed-lock",
                    x: 500,
                    y: 420
                },
                {
                    componentId: "message-queue",
                    x: 650,
                    y: 420
                },
                {
                    componentId: "sql-db",
                    x: 700,
                    y: 200
                },
                {
                    componentId: "nosql-db",
                    x: 700,
                    y: 100
                },
                {
                    componentId: "monitoring",
                    x: 850,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "rate-limiter"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "distributed-lock"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "ACID",
            "Idempotent",
            "Ledger"
        ]
    },
    {
        id: "ticket-booking",
        title: "Ticket Booking (Ticketmaster)",
        difficulty: "Hard",
        description: "Design a ticket booking platform like Ticketmaster or BookMyShow for concerts, sports events, and shows. The system must handle massive traffic spikes when popular events go on sale (Taylor Swift's Eras Tour saw 14 million users hit the site simultaneously), manage seat inventory with optimistic locking to prevent double-booking, and implement a virtual waiting room queue. The central challenges are handling extreme concurrency on hot inventory, seat hold/release lifecycle management, and preventing bots from buying tickets.",
        requirements: {
            readsPerSec: 200000,
            writesPerSec: 50000,
            storageGB: 1000,
            latencyMs: 200,
            users: "100M DAU"
        },
        constraints: [
            "No double-booking — optimistic locking or distributed locks must prevent two users from booking the same seat",
            "Virtual waiting room queue that activates when traffic exceeds system capacity (fairness guarantee)",
            "Seat hold with TTL — selected seats are reserved for 10 minutes during checkout, then auto-released",
            "Bot detection and mitigation using CAPTCHA, device fingerprinting, and behavioral analysis",
            "Support interactive seat maps with real-time availability updates via WebSocket/SSE",
            "Payment timeout handling — if payment fails after seat selection, seats must be released back to inventory",
            "Surge pricing and dynamic pricing tiers based on demand signals and remaining inventory"
        ],
        hints: [
            {
                title: "Virtual queue",
                content: "When traffic spikes, put users in a Redis-backed FIFO queue. Release them in batches to the booking flow at a controlled rate."
            },
            {
                title: "Inventory locking",
                content: "Use Redis distributed locks (SETNX with TTL) for seat holds. This prevents double-booking while allowing auto-release on timeout."
            },
            {
                title: "Event-driven updates",
                content: "Use a message queue to broadcast seat availability changes to all connected clients in real-time."
            },
            {
                title: "Advanced: Two-phase booking",
                content: "Phase 1: Optimistically reserve the seat in Redis (SETNX with 10-min TTL). Phase 2: On payment success, persist to SQL database and remove the Redis hold. On payment failure or timeout, the Redis key auto-expires and the seat becomes available. This gives you both speed and durability."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "websocket-server",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 100
                },
                {
                    componentId: "distributed-lock",
                    x: 720,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 250
                },
                {
                    componentId: "nosql-db",
                    x: 880,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "rate-limiter"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "websocket-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "distributed-lock"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Concurrency",
            "Inventory",
            "Booking"
        ]
    },
    {
        id: "collaborative-editor",
        title: "Google Docs / Collaborative Editor",
        difficulty: "Hard",
        description: "Design a real-time collaborative document editor like Google Docs or Notion where multiple users can simultaneously edit the same document with changes appearing instantly for all participants. Google Docs supports up to 100 concurrent editors on a single document — the core challenges are conflict resolution when two users edit the same paragraph simultaneously (using Operational Transformation or CRDTs), maintaining cursor positions and selections across participants, and ensuring document state eventually converges to the same result regardless of network delays.",
        requirements: {
            readsPerSec: 50000,
            writesPerSec: 30000,
            storageGB: 5000,
            latencyMs: 100,
            users: "100M DAU"
        },
        constraints: [
            "Real-time collaboration with changes visible to all editors within 200ms",
            "Conflict resolution using OT (Operational Transformation) or CRDTs for concurrent edits",
            "Cursor presence — show each collaborator's cursor position and selection in real-time",
            "Full version history with point-in-time restore and diff between any two versions",
            "Offline editing support with automatic merge when reconnecting",
            "Rich text formatting, tables, images, and embedded content",
            "Document-level and block-level permissions (view, comment, edit) with sharing controls"
        ],
        hints: [
            {
                title: "WebSocket for real-time",
                content: "Use persistent WebSocket connections for bidirectional real-time updates between clients and the collaboration server."
            },
            {
                title: "OT vs CRDT",
                content: "OT transforms operations against concurrent edits (used by Google Docs). Figma uses a custom server-authoritative approach inspired by CRDTs. OT is simpler; CRDTs are more robust offline."
            },
            {
                title: "Version history",
                content: "Store document snapshots periodically and individual operations between snapshots. Reconstruct any version by applying ops to the nearest snapshot."
            },
            {
                title: "Advanced: Collaboration server",
                content: "Run a dedicated collaboration server per document that receives all client operations, transforms them against concurrent ops (OT), applies them to the authoritative document state, and broadcasts the transformed ops to all other clients. Use Redis Pub/Sub to coordinate when a document's collaboration server moves between instances."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "websocket-server",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "object-storage",
                    x: 880,
                    y: 200
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 370
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "websocket-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "CRDT",
            "WebSocket",
            "Collaboration"
        ]
    },
    {
        id: "file-storage",
        title: "Dropbox / File Storage",
        difficulty: "Hard",
        description: "Design a cloud file storage and synchronization service like Dropbox or Google Drive. Users upload files that sync across all their devices, with support for file versioning, sharing, and conflict resolution. Dropbox syncs over 1.2 billion files daily — the key engineering challenges are efficient delta sync (only uploading changed blocks instead of entire files), deduplication across users to save storage, and handling conflicts when the same file is edited on multiple devices while offline.",
        requirements: {
            readsPerSec: 50000,
            writesPerSec: 20000,
            storageGB: 1000000,
            latencyMs: 500,
            users: "700M registered users"
        },
        constraints: [
            "Block-level chunking (4MB blocks) with content-addressable storage for deduplication",
            "Delta sync — only upload changed blocks, not the entire file, reducing bandwidth by 80%+",
            "File versioning with configurable retention (default 30 days) and point-in-time restore",
            "Conflict resolution for simultaneous edits — create conflict copies with user resolution UI",
            "Real-time sync notifications to all devices when a file changes on any device",
            "Sharing with granular permissions (view, edit, comment) and shareable links with expiration",
            "Resumable uploads for large files — handle network interruptions without restarting"
        ],
        hints: [
            {
                title: "Block-level storage",
                content: "Split files into fixed-size blocks, hash each block, and store blocks in object storage. The metadata DB maps files to ordered lists of block hashes."
            },
            {
                title: "Deduplication",
                content: "Use content-addressable storage — if a block hash already exists, don't store it again. This saves massive storage when users share similar files."
            },
            {
                title: "Sync protocol",
                content: "When a file changes, compute the new block list, diff against the stored block list, and only upload new/changed blocks. Notify other devices via a message queue."
            },
            {
                title: "Advanced: Delta sync with rolling hash",
                content: "Use rolling hash (Rabin fingerprint) to detect block boundaries in modified files. This enables variable-size chunking that minimizes the number of changed blocks even when content is inserted in the middle of a file. Combine with a message queue for real-time sync notifications to all connected devices."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 100
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 250
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Chunking",
            "Sync",
            "Dedup"
        ]
    },
    {
        id: "parking-lot",
        title: "Parking Lot System",
        difficulty: "Easy",
        description: "Design a smart parking lot management system that tracks vehicle entry/exit, manages spot availability in real-time, handles reservations, and processes payments. Modern smart parking systems like ParkMobile and SpotHero serve hundreds of millions of annual transactions — the key challenges are maintaining accurate real-time availability across multiple lots, handling concurrent reservation requests for the same spot, and integrating with IoT sensors for automatic occupancy detection.",
        requirements: {
            readsPerSec: 5000,
            writesPerSec: 2000,
            storageGB: 100,
            latencyMs: 200,
            users: "10M DAU"
        },
        constraints: [
            "Real-time spot availability updated within 2 seconds of vehicle entry/exit via IoT sensors",
            "Reservation system with time slots — prevent double-booking of the same spot at the same time",
            "Dynamic pricing based on demand, time of day, event proximity, and lot occupancy percentage",
            "Support multiple vehicle types: compact, regular, handicapped, EV charging, motorcycle",
            "Automatic license plate recognition (LPR) for ticketless entry and exit",
            "Payment processing with support for hourly, daily, and monthly passes",
            "Multi-lot management dashboard with analytics (peak hours, revenue, utilization trends)"
        ],
        hints: [
            {
                title: "Data model",
                content: "Model parking lots with floors, zones, and individual spots. Each spot has a type, status, and optional reservation."
            },
            {
                title: "Real-time availability",
                content: "Use Redis to cache current availability counts per lot/floor/type. Update on every entry/exit event for instant queries."
            },
            {
                title: "Reservation locking",
                content: "Use optimistic locking in the database for reservations — check availability at commit time, not at selection time."
            },
            {
                title: "Advanced: Event-driven updates",
                content: "IoT sensors publish entry/exit events to a message queue. A processor updates the cache (Redis) and database, and broadcasts availability changes to the mobile app via WebSocket for real-time map updates."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 500,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 500,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 500,
                    y: 400
                },
                {
                    componentId: "sql-db",
                    x: 700,
                    y: 250
                },
                {
                    componentId: "monitoring",
                    x: 700,
                    y: 100
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "IoT",
            "Real-time",
            "Booking"
        ]
    },
    {
        id: "instagram",
        title: "Instagram / Photo Sharing",
        difficulty: "Medium",
        description: "Design a photo and short-video sharing platform like Instagram. Users upload photos that are processed (resized, filtered, compressed), stored across a CDN, and displayed in a personalized feed. Instagram serves over 3 billion monthly active users and processes 100+ million photo uploads daily — the key challenges are building an efficient media processing pipeline, generating a ranked feed from thousands of candidate posts, and serving media globally with minimal latency using edge caching.",
        requirements: {
            readsPerSec: 150000,
            writesPerSec: 20000,
            storageGB: 500000,
            latencyMs: 200,
            users: "500M DAU"
        },
        constraints: [
            "Photo upload processing pipeline: resize to multiple resolutions, apply optional filters, strip EXIF data",
            "Stories (24h ephemeral content) and Reels (short video) alongside permanent posts",
            "Ranked feed using signals: relationship strength, post engagement, recency, content type preferences",
            "Image/video CDN with edge caching — serve media from the nearest POP to the user",
            "Social graph storage for followers/following with efficient fan-out for feed generation",
            "Real-time engagement (likes, comments, shares) with optimistic UI updates",
            "Content moderation pipeline — automated detection of policy-violating content before publication"
        ],
        hints: [
            {
                title: "Media pipeline",
                content: "Upload original to object storage, push a processing job to a message queue, workers generate thumbnails and resized versions, then update CDN."
            },
            {
                title: "Feed generation",
                content: "Pre-compute feeds for most users (fan-out-on-write). For high-follower accounts, merge their posts at read time (fan-out-on-read)."
            },
            {
                title: "CDN strategy",
                content: "Serve all media through a CDN with aggressive caching. Use image-specific CDNs (like Cloudinary or Imgix) for on-the-fly resizing."
            },
            {
                title: "Advanced: Two-tier storage",
                content: "Recent photos (< 30 days) stay on fast SSD-backed object storage with CDN caching. Older photos migrate to cheaper archival storage (S3 Infrequent Access). When an old photo is accessed, the CDN fetches from archival storage and caches it at the edge, hiding the higher latency from users."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 200
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 60
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 380
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 250
                },
                {
                    componentId: "search",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "sharded-counter",
                    x: 880,
                    y: 80
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "sharded-counter"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "CDN",
            "Media",
            "Feed"
        ]
    },
    {
        id: "music-streaming",
        title: "Spotify / Music Streaming",
        difficulty: "Medium",
        description: "Design a music streaming platform like Spotify that serves audio content to millions of concurrent listeners, manages a catalog of 100M+ tracks, generates personalized playlists, and supports offline downloads. Spotify streams billions of minutes of audio daily — the key challenges are optimizing audio delivery with adaptive bitrate streaming, building a recommendation engine from listening history, and managing music licensing and royalty tracking for artists.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 10000,
            storageGB: 500000,
            latencyMs: 200,
            users: "200M DAU"
        },
        constraints: [
            "Adaptive bitrate audio streaming (96kbps, 160kbps, 320kbps) based on network conditions",
            "Gapless playback with audio pre-buffering — next track starts loading before current track ends",
            "Personalized recommendations: Discover Weekly, Release Radar, daily mixes using collaborative filtering",
            "Offline mode with encrypted local storage — downloaded tracks work without internet",
            "Social features: collaborative playlists, friend activity, sharing to external platforms",
            "Real-time play count tracking and royalty calculation per stream for rights holders",
            "Search across 100M+ tracks by title, artist, album, lyrics with fuzzy matching"
        ],
        hints: [
            {
                title: "Audio delivery",
                content: "Store audio files in object storage at multiple bitrates. Use a CDN with edge caching for popular tracks — top 1% of tracks account for 80% of streams."
            },
            {
                title: "Recommendation engine",
                content: "Combine collaborative filtering (users who liked X also liked Y) with content-based features (audio analysis, genre, mood). Process listening events through a message queue."
            },
            {
                title: "Catalog and search",
                content: "Store the music catalog in a NoSQL database. Use Elasticsearch for full-text search across titles, artists, and lyrics."
            },
            {
                title: "Advanced: Pre-fetch pipeline",
                content: "When a user is 30 seconds from the end of a track, predict the next track (based on queue, playlist, or auto-play) and start streaming it to the client. Cache frequently co-listened tracks on the same CDN edge node to reduce origin fetches."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 250
                },
                {
                    componentId: "search",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Streaming",
            "CDN",
            "Recommendations"
        ]
    },
    {
        id: "ecommerce",
        title: "Amazon / E-Commerce",
        difficulty: "Hard",
        description: "Design a large-scale e-commerce platform like Amazon. The system handles product catalog management with millions of SKUs, shopping cart persistence, inventory tracking across warehouses, order processing, and personalized recommendations. Amazon processes over 300 million active customer accounts and handles over a million orders per hour at peak during events like Prime Day (Prime Day 2023 peaked at ~22,000 orders/minute) — the central challenges are maintaining inventory consistency across concurrent purchases, building a low-latency product search, and orchestrating the complex order fulfillment pipeline.",
        requirements: {
            readsPerSec: 200000,
            writesPerSec: 50000,
            storageGB: 20000,
            latencyMs: 200,
            users: "300M active accounts"
        },
        constraints: [
            "Product catalog with 100M+ SKUs, each with variants (size, color), pricing tiers, and seller information",
            "Real-time inventory tracking across multiple warehouses — prevent overselling on concurrent purchases",
            "Shopping cart persistence — carts survive browser closure, device switching, and user sign-in/out",
            "Order processing pipeline: payment → inventory reservation → warehouse assignment → shipping → delivery tracking",
            "Product search with filters (category, price, rating, availability) and typo tolerance",
            "Personalized recommendations on homepage, product pages, and cart (frequently bought together)",
            "Flash sale / Prime Day handling — 100× normal traffic spikes with fair inventory allocation"
        ],
        hints: [
            {
                title: "Microservice split",
                content: "Separate services for catalog, cart, inventory, orders, payments, and search. Each scales independently based on its traffic pattern."
            },
            {
                title: "Inventory management",
                content: "Use optimistic locking with version numbers for inventory updates. Reserve stock at checkout, deduct on payment confirmation, release on timeout."
            },
            {
                title: "Cart design",
                content: "Store carts in a NoSQL database (DynamoDB) with the user ID as the key. Merge anonymous carts with user carts on sign-in."
            },
            {
                title: "Advanced: Event sourcing for orders",
                content: "Model orders as a stream of events (created → paid → picked → packed → shipped → delivered). Each event is appended to a message queue. Consumers update projections (order status, inventory, analytics) independently. This gives you full auditability, replay capability, and decoupled services."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 350
                },
                {
                    componentId: "search",
                    x: 880,
                    y: 200
                },
                {
                    componentId: "object-storage",
                    x: 880,
                    y: 350
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 80
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "rate-limiter"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Catalog",
            "Cart",
            "Inventory"
        ]
    },
    {
        id: "team-messaging",
        title: "Slack / Team Messaging",
        difficulty: "Hard",
        description: "Design a workspace-based team messaging platform like Slack or Microsoft Teams. The system supports organized channels, threaded conversations, direct messages, file sharing, search across message history, and integrations with third-party services. Slack handles tens of millions of daily active users across hundreds of thousands of workspaces — the key challenges are maintaining message ordering and delivery guarantees across channels, building a fast full-text search index over billions of messages, and managing the complex permission model of workspaces, channels, and threads.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 30000,
            storageGB: 10000,
            latencyMs: 100,
            users: "100M DAU"
        },
        constraints: [
            "Workspace isolation — data from one workspace must never leak to another (multi-tenant security)",
            "Channel types: public (discoverable), private (invite-only), DMs (1:1 and group)",
            "Threaded conversations with reply counts, last-reply timestamps, and thread-follow notifications",
            "Real-time message delivery via WebSocket with offline message queuing for disconnected clients",
            "Full-text search across all messages in a workspace with filters (channel, user, date range, has:file)",
            "File sharing with preview generation (images, PDFs, code snippets) and per-file access control",
            "Integration framework for bots and external services (webhooks, slash commands, OAuth apps)"
        ],
        hints: [
            {
                title: "Message storage",
                content: "Store messages in a NoSQL database partitioned by workspace + channel. Use channel-level sequence numbers for ordering."
            },
            {
                title: "Real-time delivery",
                content: "Maintain WebSocket connections per user. Use Redis Pub/Sub to route messages — subscribe each connection to the user's active channels."
            },
            {
                title: "Search architecture",
                content: "Index messages in a Lucene-based search engine (Slack uses Solr) partitioned by workspace. Update the index asynchronously via a message queue to avoid slowing down message sends."
            },
            {
                title: "Advanced: Connection gateway",
                content: "Deploy a dedicated WebSocket gateway layer that maintains persistent connections. App servers send messages to the gateway via an internal message bus. The gateway maps user IDs to connections. This separates the stateful connection layer from the stateless business logic, letting each scale independently."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "websocket-server",
                    x: 530,
                    y: 380
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 200
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 60
                },
                {
                    componentId: "message-queue",
                    x: 720,
                    y: 380
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 60
                },
                {
                    componentId: "search",
                    x: 880,
                    y: 380
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 200
                },
                {
                    componentId: "rate-limiter",
                    x: 200,
                    y: 420
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "load-balancer",
                    target: "rate-limiter"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "websocket-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "message-queue",
                    target: "search"
                },
                {
                    source: "message-queue",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "WebSocket",
            "Search",
            "Workspace"
        ]
    },
    {
        id: "metrics-monitoring",
        title: "Metrics / Monitoring System",
        difficulty: "Hard",
        description: "Design a metrics collection and monitoring system like Datadog, Prometheus, or New Relic. The system ingests millions of time-series data points per second from thousands of servers, stores them efficiently with configurable retention, supports real-time dashboarding, and triggers alerts based on complex threshold and anomaly detection rules. Datadog ingests trillions of data points daily — the core challenges are designing a storage engine optimized for time-series write patterns, supporting flexible aggregation queries at sub-second speed, and building a reliable alerting pipeline with low false-positive rates.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 500000,
            storageGB: 50000,
            latencyMs: 100,
            users: "N/A (infrastructure)"
        },
        constraints: [
            "Ingest 500K+ metrics data points per second with sub-second write latency",
            "Time-series storage with automatic downsampling: raw (7 days), 1-min avg (30 days), 1-hour avg (1 year)",
            "Flexible query language for aggregation: avg, sum, percentiles, rate, group-by across arbitrary tag dimensions",
            "Real-time dashboard rendering with auto-refresh and support for custom visualization widgets",
            "Alerting engine with threshold, anomaly detection, and composite alert conditions",
            "Alert routing with escalation policies, on-call schedules, and multi-channel delivery (PagerDuty, Slack, email)",
            "Tag-based metric organization with high-cardinality tag support (up to 10K unique values per tag)"
        ],
        hints: [
            {
                title: "Write-optimized ingestion",
                content: "Use a message queue to buffer incoming metrics. Batch writes to the time-series database for higher throughput."
            },
            {
                title: "Time-series storage",
                content: "Use a specialized time-series database (or NoSQL with time-based partitioning). Compress adjacent data points using delta-of-delta encoding."
            },
            {
                title: "Alerting pipeline",
                content: "Separate the alerting evaluation from ingestion. A dedicated service continuously evaluates alert rules against recent data and fires notifications."
            },
            {
                title: "Advanced: Downsampling pipeline",
                content: "Run a background job that reads raw metrics older than 7 days, computes 1-minute aggregates (avg, min, max, count), writes them to a separate table, and deletes the raw data. Repeat at 30 days for 1-hour aggregates. This reduces storage by 100x while keeping historical queries fast."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "load-balancer",
                    x: 100,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 250,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 420,
                    y: 200
                },
                {
                    componentId: "message-queue",
                    x: 420,
                    y: 380
                },
                {
                    componentId: "cache",
                    x: 420,
                    y: 60
                },
                {
                    componentId: "timeseries-db",
                    x: 620,
                    y: 200
                },
                {
                    componentId: "sql-db",
                    x: 620,
                    y: 380
                },
                {
                    componentId: "search",
                    x: 620,
                    y: 60
                },
                {
                    componentId: "monitoring",
                    x: 820,
                    y: 200
                },
                {
                    componentId: "auth-service",
                    x: 250,
                    y: 100
                }
            ],
            edges: [
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "timeseries-db"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "TimeSeries",
            "Alerting",
            "Aggregation"
        ]
    },
    {
        id: "netflix",
        title: "Netflix / Video Streaming Platform",
        difficulty: "Hard",
        description: "Design a video streaming platform like Netflix that serves personalized content to over 300 million subscribers (~302M, Q4 2024) across 190+ countries. Netflix accounts for over 15% of global downstream internet traffic — the key challenges are building a content recommendation engine that drives 80% of watch time, implementing adaptive bitrate streaming (ABR) that adjusts quality frame-by-frame based on network conditions, and leveraging a global CDN (Open Connect) with ISP-embedded appliances to serve thousands of titles with ~1s start times.",
        requirements: {
            readsPerSec: 300000,
            writesPerSec: 5000,
            storageGB: 2000000,
            latencyMs: 100,
            users: "302M subscribers"
        },
        constraints: [
            "Adaptive bitrate streaming (ABR) using per-shot encoding — each scene encoded at optimal bitrate/resolution ladder",
            "Content recommendation engine processing billions of implicit signals (watch time, pauses, rewatches, abandons)",
            "Global CDN with ISP-embedded Open Connect Appliances (OCAs) caching popular content at the network edge",
            "DRM enforcement (Widevine, FairPlay, PlayReady) with license server handling 100K+ license requests/sec",
            "Multi-profile support per account with isolated recommendation models and viewing history",
            "Content ingestion pipeline: ingest mezzanine file → encode 1200+ variants (resolution × bitrate × codec) per title"
        ],
        hints: [
            {
                title: "Content delivery",
                content: "Use a CDN with ISP-embedded edge appliances for popular titles. Pre-position content during off-peak hours based on predicted regional demand."
            },
            {
                title: "Recommendation engine",
                content: "Combine collaborative filtering with deep learning models trained on viewing patterns. Stream user events through a message queue for real-time signal processing."
            },
            {
                title: "Encoding pipeline",
                content: "Use per-title and per-shot encoding optimization. Process through a message queue that triggers parallel transcoding workers to generate the full resolution/bitrate ladder."
            },
            {
                title: "Advanced: Microservice architecture",
                content: "Netflix uses 1000+ microservices. Separate the control plane (API, auth, recommendations, search) from the data plane (video streaming via CDN). The API gateway (Zuul) handles routing, auth, and rate limiting. Use a cache (EVCache/Memcached) aggressively — Netflix caches billions of data points to achieve sub-100ms API responses."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "origin-shield",
                    x: 350,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 250
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "search",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "stream-processor",
                    x: 880,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "origin-shield"
                },
                {
                    source: "origin-shield",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "message-queue",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Streaming",
            "CDN",
            "Recommendations",
            "DRM"
        ]
    },
    {
        id: "tinder",
        title: "Tinder / Dating App",
        difficulty: "Medium",
        description: "Design a location-based dating application like Tinder that matches users based on geographic proximity, preferences, and compatibility signals. Tinder processes over 2 billion swipes per day with 75 million monthly active users — the key challenges are building an efficient geospatial index for proximity matching, a recommendation engine that surfaces relevant profiles while avoiding already-seen users, and handling the high write throughput of swipe events with real-time match notifications when two users swipe right on each other.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 50000,
            storageGB: 100000,
            latencyMs: 200,
            users: "75M MAU"
        },
        constraints: [
            "Geospatial proximity search using geohashing or R-tree index — find users within configurable radius (1-160 km)",
            "Recommendation engine that filters by preferences (age, gender, distance) and ranks by compatibility score",
            "Swipe deduplication — never show a user the same profile twice, even across sessions",
            "Real-time match detection — when both users swipe right, notify both instantly via push notification",
            "Photo storage and serving with face detection validation and content moderation pipeline",
            "ELO-like scoring system that adapts profile visibility based on desirability signals"
        ],
        hints: [
            {
                title: "Geospatial indexing",
                content: "Use geohashing to partition users by location. Store active user locations in Redis with GEOADD for O(log N) proximity queries within a radius."
            },
            {
                title: "Recommendation pipeline",
                content: "Pre-compute a recommendation deck for each active user: filter by preferences, exclude already-swiped profiles, rank by compatibility score, and cache the top 100 candidates."
            },
            {
                title: "Match detection",
                content: "On each right-swipe, check if the target user has already right-swiped the current user. Store swipes in a NoSQL database keyed by (swiper, swipee) for O(1) lookup."
            },
            {
                title: "Advanced: Sharded recommendation",
                content: "Partition the user base by geohash prefix so each recommendation shard handles a geographic region. Within each shard, maintain a bloom filter of seen profiles per user to avoid re-showing. Pre-compute recommendation decks during off-peak hours using a stream processor that scores all eligible matches."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "geospatial-index",
                    x: 880,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "stream-processor",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "geospatial-index"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "stream-processor",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Geo-spatial",
            "Matching",
            "Recommendations",
            "Real-time"
        ]
    },
    {
        id: "google-maps",
        title: "Google Maps / Navigation",
        difficulty: "Hard",
        description: "Design a mapping and navigation platform like Google Maps that serves map tiles, computes optimal routes, provides real-time traffic updates, and estimates accurate ETAs. Google Maps serves over 2 billion monthly active users and processes 1 billion kilometers of driving directions daily — the core challenges are serving pre-rendered map tiles at multiple zoom levels from a multi-petabyte tile corpus, computing shortest paths on a road graph with hundreds of millions of edges using hierarchical algorithms (Contraction Hierarchies / A*), and ingesting real-time GPS probe data from millions of devices to update traffic conditions every 30 seconds.",
        requirements: {
            readsPerSec: 500000,
            writesPerSec: 100000,
            storageGB: 5000000,
            latencyMs: 200,
            users: "2B+ MAU"
        },
        constraints: [
            "Map tile serving at 20+ zoom levels — vector tiles for mobile, raster tiles for web, pre-rendered and cached at CDN edge",
            "Route computation using Contraction Hierarchies or A* on a graph with 500M+ road segments in under 200ms",
            "Real-time traffic layer updated every 30 seconds from GPS probe data aggregated across millions of active drivers",
            "ETA prediction combining historical patterns, live traffic, road type, and time-of-day with < 20% error",
            "Multi-modal routing: driving, walking, cycling, public transit with real-time schedule integration",
            "Geocoding and reverse geocoding with fuzzy address matching across 200+ countries and scripts"
        ],
        hints: [
            {
                title: "Map tile serving",
                content: "Pre-render tiles at each zoom level and store in object storage. Serve via CDN for instant loading. Use vector tiles on mobile to reduce bandwidth — the client renders them locally."
            },
            {
                title: "Route computation",
                content: "Use Contraction Hierarchies (CH) to preprocess the road graph. CH reduces a cross-country route query from millions of edge relaxations to a few thousand, enabling sub-200ms responses."
            },
            {
                title: "Real-time traffic",
                content: "Ingest GPS probes from active users into a stream processor. Aggregate speed per road segment over 30-second windows. Store in a time-series database and overlay on the pre-computed road graph."
            },
            {
                title: "Advanced: Partitioned graph serving",
                content: "Partition the road graph geographically. Each partition server handles local routing. For cross-partition routes, use a two-level approach: a global overlay graph of inter-partition highways handles the macro route, then local servers compute the first-mile and last-mile segments. Cache popular origin-destination pairs for instant responses."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "geospatial-index",
                    x: 880,
                    y: 80
                },
                {
                    componentId: "stream-processor",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "timeseries-db",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "geospatial-index"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "stream-processor"
                },
                {
                    source: "stream-processor",
                    target: "timeseries-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Geo-spatial",
            "Graph",
            "Real-time",
            "CDN"
        ]
    },
    {
        id: "zoom",
        title: "Zoom / Video Conferencing",
        difficulty: "Hard",
        description: "Design a real-time video conferencing platform like Zoom that supports meetings with up to 1000 participants, screen sharing, recording, and breakout rooms. Zoom handles over 300 million daily meeting participants with end-to-end latency under 150ms — the core challenges are building a Selective Forwarding Unit (SFU) architecture that routes video streams without transcoding to minimize latency, managing bandwidth allocation when dozens of participants have cameras enabled simultaneously, and providing reliable recording with server-side mixing for cloud playback.",
        requirements: {
            readsPerSec: 50000,
            writesPerSec: 50000,
            storageGB: 500000,
            latencyMs: 50,
            users: "300M daily meeting participants"
        },
        constraints: [
            "End-to-end glass-to-glass latency under 150ms for real-time audio/video using WebRTC or custom UDP protocol",
            "SFU (Selective Forwarding Unit) architecture — server forwards streams without transcoding to minimize latency",
            "Simulcast: each sender encodes 3 quality layers (low/medium/high), SFU selects per-receiver based on bandwidth and layout",
            "Screen sharing at 1080p/30fps alongside camera feeds with independent bandwidth allocation",
            "Cloud recording with server-side mixing — composite multiple video streams into a single recording file",
            "Breakout rooms, waiting rooms, and host controls with real-time state synchronization across all participants"
        ],
        hints: [
            {
                title: "SFU over MCU",
                content: "Use a Selective Forwarding Unit (SFU) instead of a Multipoint Control Unit (MCU). SFU forwards packets without decoding/re-encoding, reducing latency and server CPU cost by 10x compared to MCU."
            },
            {
                title: "Simulcast for bandwidth",
                content: "Each sender publishes 3 quality layers (e.g., 180p, 360p, 720p). The SFU dynamically selects the appropriate layer for each receiver based on their available bandwidth and visible tile size."
            },
            {
                title: "Distributed media routing",
                content: "Deploy SFU servers in multiple regions. For cross-region meetings, cascade SFU servers over dedicated backbone links rather than sending each participant's stream across regions independently."
            },
            {
                title: "Advanced: Geo-distributed SFU mesh",
                content: "For global meetings, deploy SFU nodes in each participant's nearest region. Connect SFU nodes via a server-to-server mesh over the provider's backbone network. Each SFU forwards only the active speaker and pinned streams across regions (not all participants), reducing cross-region bandwidth by 80%. Use SRTP for encryption and RTCP feedback for congestion control."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "websocket-server",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "load-balancer",
                    target: "websocket-server"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "WebRTC",
            "Real-time",
            "Media",
            "SFU"
        ]
    },
    {
        id: "food-delivery",
        title: "Doordash / Food Delivery",
        difficulty: "Hard",
        description: "Design a food delivery platform like DoorDash or Uber Eats that connects customers, restaurants, and delivery drivers in real-time. DoorDash processes over 750 million orders per quarter across 500,000+ merchant partners — the core challenges are building a real-time dispatch system that optimally matches orders to drivers (considering location, capacity, and estimated completion times), maintaining accurate ETAs that update as conditions change, and handling the three-sided marketplace where restaurant prep times, driver routes, and customer expectations must all be balanced simultaneously.",
        requirements: {
            readsPerSec: 80000,
            writesPerSec: 40000,
            storageGB: 50000,
            latencyMs: 200,
            users: "~42M MAU (37M+ all-time high reported Dec 2023, growing double-digit YoY)"
        },
        constraints: [
            "Real-time order tracking with GPS updates every 5 seconds from active delivery drivers",
            "Driver dispatch algorithm optimizing for delivery time, driver earnings, and order batching (multi-pickup routes)",
            "Restaurant inventory and prep-time estimation — dynamically adjust menu availability based on kitchen capacity",
            "ETA prediction combining restaurant prep time, driver travel time, and real-time traffic conditions",
            "Payment splitting: customer charge, restaurant payout (minus commission), driver payout (base + tips + peak pay)",
            "Surge pricing and delivery fee calculation based on real-time demand/supply ratio per zone"
        ],
        hints: [
            {
                title: "Three-sided marketplace",
                content: "Model the system as three user types: customers (ordering), restaurants (preparing), and drivers (delivering). Each has separate real-time state that must be coordinated."
            },
            {
                title: "Dispatch optimization",
                content: "Use a centralized dispatch service that runs a matching algorithm every few seconds, considering driver proximity to restaurant, current orders in progress, and restaurant prep time estimates."
            },
            {
                title: "Real-time tracking",
                content: "Ingest driver GPS updates into a stream processor. Update ETAs in real-time and push to customers via WebSocket or server-sent events."
            },
            {
                title: "Advanced: Order batching",
                content: "DoorDash groups multiple orders from nearby restaurants heading to nearby destinations into a single driver route. The dispatch algorithm runs a traveling-salesman heuristic (nearest-neighbor with 2-opt improvement) to minimize total delivery time while keeping each individual order within its promised ETA window."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 300
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 150
                },
                {
                    componentId: "stream-processor",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "stream-processor",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Geo-spatial",
            "Real-time",
            "Dispatch",
            "Marketplace"
        ]
    },
    {
        id: "reddit",
        title: "Reddit / Social News",
        difficulty: "Medium",
        description: "Design a social news aggregation and discussion platform like Reddit. Users submit posts to topic-based communities (subreddits), vote content up or down, and engage in deeply nested comment threads. Reddit serves ~120M daily active uniques (DAUq, Q4 2025) across 100,000+ active communities — the key challenges are implementing a ranking algorithm (hot, top, controversial, best) that surfaces quality content across communities of vastly different sizes, efficiently storing and rendering deeply nested comment trees with thousands of replies, and building a moderation system that scales across volunteer moderators.",
        requirements: {
            readsPerSec: 200000,
            writesPerSec: 20000,
            storageGB: 200000,
            latencyMs: 200,
            users: "~120M daily active uniques (DAUq, Q4 2025)"
        },
        constraints: [
            "Multiple ranking algorithms: hot (time-decayed score), top (by time window), controversial (balanced up/down), best (Wilson score)",
            "Nested comment trees with efficient rendering — load top-level comments first, lazy-load deep threads",
            "Subreddit isolation — each community has its own rules, moderators, CSS themes, and content policies",
            "Vote counting with anti-manipulation: rate limiting, vote fuzzing, and bot detection",
            "Cross-posting and content aggregation across subreddits with deduplication on /r/all",
            "Full-text search across posts and comments with subreddit and time-range filters"
        ],
        hints: [
            {
                title: "Ranking algorithm",
                content: "Reddit's hot ranking uses: score = sign(ups - downs) * log10(max(|ups - downs|, 1)) + (post_epoch_seconds - 1134028003) / 45000. Note the sign multiplies the LOG term, while the time term is unsigned and grows monotonically (the constant is Reddit's epoch, Dec 8, 2005). Every new post gets a huge time boost that older posts can never catch up to, while net votes add or subtract only logarithmically — 10x the votes is worth one extra 'point'. Pre-compute rankings and cache the sorted feeds for each subreddit."
            },
            {
                title: "Comment tree storage",
                content: "Store comments in a NoSQL database with parent_id for tree structure. Use materialized path (e.g., 'root/parent/child') for efficient subtree queries. Cache top-level comments aggressively."
            },
            {
                title: "Vote processing",
                content: "Process votes through a message queue to decouple the fast vote acknowledgment from the slower ranking recalculation. Use Redis to cache current vote counts per post."
            },
            {
                title: "Advanced: Hybrid feed computation",
                content: "For small subreddits (< 10K subscribers), compute rankings on the fly from cached vote counts. For large subreddits (> 100K), pre-compute ranked feeds every 30 seconds using a background job. For /r/all, use a stream processor that merges top posts from all subreddits with normalized scoring to prevent large communities from dominating."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 350
                },
                {
                    componentId: "search",
                    x: 880,
                    y: 200
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "sharded-counter",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 350
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "sharded-counter"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Ranking",
            "Comments",
            "Voting",
            "Community"
        ]
    },
    {
        id: "airbnb",
        title: "Airbnb / Booking Platform",
        difficulty: "Hard",
        description: "Design a property rental and booking platform like Airbnb that connects hosts with guests for short-term stays. Airbnb has 7+ million active listings across 220 countries with billions of monthly searches — the core challenges are building a search system that handles complex multi-dimensional queries (location, dates, price, amenities, guest count), implementing a booking and reservation system that prevents double-booking across overlapping date ranges, and building a dynamic pricing algorithm that helps hosts optimize revenue based on seasonality, local events, and comparable listings.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 10000,
            storageGB: 100000,
            latencyMs: 200,
            users: "200M+ active users, ~5M DAU"
        },
        constraints: [
            "Search with compound filters: location (geo-radius), date range availability, price range, guest count, amenities, property type",
            "Calendar-based availability management — hosts block dates, bookings reserve date ranges, no double-booking allowed",
            "Reservation system with hold-and-confirm pattern: temporarily hold dates during checkout flow (15-min TTL)",
            "Dynamic pricing suggestions using comparable listings, seasonality patterns, local event calendars, and demand forecasts",
            "Review system with bilateral reviews (host reviews guest, guest reviews host) revealed simultaneously after both submit",
            "Multi-currency pricing with real-time exchange rates, host payout in local currency, guest charges in their currency"
        ],
        hints: [
            {
                title: "Search architecture",
                content: "Use Elasticsearch with geo_point for location search, date range queries for availability, and filters for amenities/price. Pre-compute availability calendars as bitmaps for fast date-range intersection."
            },
            {
                title: "Availability management",
                content: "Store each listing's availability as a calendar in a SQL database. Use row-level locking or optimistic concurrency to prevent double-booking when two guests try to book overlapping dates."
            },
            {
                title: "Booking flow",
                content: "Phase 1: Hold the dates in a distributed lock (Redis SETNX with 15-min TTL). Phase 2: Process payment. Phase 3: Confirm booking in SQL and release the lock. On timeout, dates auto-release."
            },
            {
                title: "Advanced: Search relevance",
                content: "Airbnb's search ranking combines 100+ features: price competitiveness, host response rate, listing quality score, guest-listing compatibility, and conversion probability. Use a two-stage ranking pipeline: a fast candidate retrieval phase (Elasticsearch with geo + date filters) followed by a machine-learned re-ranking model (gradient boosted trees) that scores the top 1000 candidates."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 150
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 300
                },
                {
                    componentId: "search",
                    x: 880,
                    y: 150
                },
                {
                    componentId: "object-storage",
                    x: 880,
                    y: 300
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 420
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Search",
            "Booking",
            "Geo-spatial",
            "Marketplace"
        ]
    },
    {
        id: "whatsapp",
        title: "WhatsApp / Messaging",
        difficulty: "Hard",
        description: "Design an end-to-end encrypted messaging platform like WhatsApp that handles 100+ billion messages per day across 3 billion monthly active users. The server never sees plaintext message content — the core challenges are implementing the Signal Protocol for end-to-end encryption with perfect forward secrecy, reliably delivering messages to offline users (store-and-forward), efficiently fanning out messages in group chats (up to 1024 members), and synchronizing message state across multiple linked devices while maintaining encryption guarantees.",
        requirements: {
            readsPerSec: 2400000,
            writesPerSec: 1200000,
            storageGB: 500000,
            latencyMs: 50,
            users: "3B MAU"
        },
        constraints: [
            "End-to-end encryption using Signal Protocol — server stores only ciphertext, key exchange via X3DH (Extended Triple Diffie-Hellman)",
            "Offline message delivery with store-and-forward — messages queued on server until recipient reconnects, then delivered in order",
            "Group messaging up to 1024 members with Sender Keys protocol for efficient group encryption",
            "Media sharing with encrypted upload — media encrypted client-side, uploaded to object storage, decryption key sent in message",
            "Multi-device support (WhatsApp Web/Desktop) with message sync using companion device protocol",
            "Per-conversation ordering — each conversation carries its own monotonically increasing sequence numbers so every device renders messages in the same order and can detect gaps after reconnect",
            "Receipt state machine: sent (accepted by server) → delivered (reached recipient device) → read (viewed), with state transitions strictly forward-only per message per recipient",
            "Read receipts, typing indicators, and online presence as ephemeral signals (no persistent storage)"
        ],
        hints: [
            {
                title: "Connection management",
                content: "Maintain persistent WebSocket connections from each client to a connection gateway. Store the mapping of user ID → gateway server in Redis for message routing."
            },
            {
                title: "Message delivery",
                content: "On send: encrypt client-side, send to server, server queues in recipient's inbox (NoSQL). When recipient is online, push immediately via their WebSocket connection. When offline, store and deliver on reconnect."
            },
            {
                title: "Group messaging",
                content: "Use Sender Keys: the sender encrypts the message once with a shared group key, server fans out the ciphertext to all group members. This avoids N separate encryptions per message."
            },
            {
                title: "Ordering and receipt state machine",
                content: "Order messages with per-conversation sequence numbers, not global timestamps: the server (or the conversation's owning partition) assigns each message a monotonically increasing sequence within that conversation, so all devices agree on order and a client that reconnects can detect and fill gaps by asking for 'everything after seq N'. Receipts are a tiny state machine per (message, recipient): sent → delivered → read. Each transition is reported back to the sender as a small system message; transitions only move forward (a read message never becomes merely delivered), and duplicate receipt events are idempotent no-ops."
            },
            {
                title: "Advanced: Multi-device sync",
                content: "WhatsApp's multi-device architecture treats each device as a separate Signal Protocol client. When sending to a user with 4 linked devices, the sender encrypts the message 4 times (once per device's public key). Each device maintains its own ratchet state. The server stores per-device message queues and delivers independently. This eliminates the need for a primary device to be online."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "websocket-server",
                    x: 200,
                    y: 100
                },
                {
                    componentId: "app-server",
                    x: 400,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 400,
                    y: 100
                },
                {
                    componentId: "message-queue",
                    x: 400,
                    y: 400
                },
                {
                    componentId: "nosql-db",
                    x: 600,
                    y: 250
                },
                {
                    componentId: "object-storage",
                    x: 600,
                    y: 100
                },
                {
                    componentId: "monitoring",
                    x: 800,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "websocket-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Encryption",
            "WebSocket",
            "Messaging",
            "Real-time"
        ]
    },
    {
        id: "search-engine",
        title: "Google Search / Search Engine",
        difficulty: "Hard",
        description: "Design a web search engine like Google that crawls billions of web pages, builds an inverted index, ranks results by relevance, and returns the top results in under 200ms. Google processes over 8.5 billion searches per day across an index of hundreds of billions of pages (on the order of 100 petabytes) — the core challenges are building and maintaining a distributed inverted index that maps every word to the documents containing it, implementing a ranking algorithm (PageRank + hundreds of signals) that surfaces the most relevant results, and serving queries with sub-200ms latency by scattering the query across thousands of index shards in parallel.",
        requirements: {
            readsPerSec: 500000,
            writesPerSec: 50000,
            storageGB: 100000000,
            latencyMs: 200,
            users: "8.5B queries/day"
        },
        constraints: [
            "Distributed inverted index sharded across thousands of machines — each shard holds a portion of the web",
            "PageRank computation over a web graph of 100B+ nodes using iterative MapReduce (converges in 40-50 iterations)",
            "Query parsing with spell correction, synonym expansion, entity recognition, and intent classification",
            "Sub-200ms query latency by scatter-gather across index shards with aggressive timeouts (drop slow shards)",
            "Freshness: crawl and re-index high-priority pages (news sites) within minutes of changes",
            "Snippet generation — extract the most relevant text fragment from each result page to display in results"
        ],
        hints: [
            {
                title: "Inverted index",
                content: "Build an inverted index mapping each term to a sorted list of (docID, frequency, positions). Shard by document (each shard holds the full index for a subset of pages). At query time, scatter the query to all shards and merge results."
            },
            {
                title: "Ranking signals",
                content: "Combine hundreds of signals: PageRank (link authority), BM25 (term relevance), freshness, page speed, mobile-friendliness, and user engagement metrics. Use a machine-learned model to weight signals."
            },
            {
                title: "Crawl and index pipeline",
                content: "Web crawler discovers pages → message queue → parser extracts text and links → indexer updates inverted index → PageRank recomputes periodically on the link graph."
            },
            {
                title: "Advanced: Two-phase ranking",
                content: "Phase 1 (retrieval): Use the inverted index to find candidate documents matching the query terms using BM25 scoring — returns top 1000 candidates per shard. Phase 2 (ranking): A machine-learned model re-ranks candidates using 200+ features (PageRank, click-through rate, query-document embedding similarity). This two-phase approach lets you apply expensive ranking only to promising candidates."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 150
                },
                {
                    componentId: "search",
                    x: 720,
                    y: 300
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "object-storage",
                    x: 880,
                    y: 150
                },
                {
                    componentId: "stream-processor",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 300
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "stream-processor",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Search",
            "Indexing",
            "PageRank",
            "Distributed"
        ]
    },
    {
        id: "location-service",
        title: "Yelp / Location-Based Service",
        difficulty: "Medium",
        description: "Design a location-based business discovery and review platform like Yelp or Google Places. Users search for businesses by category and proximity, browse photos and reviews, and contribute their own ratings. Yelp indexes over 330 million reviews for 7+ million businesses — the core challenges are building an efficient geospatial index (QuadTree or Geohash) that supports proximity search with category filters, aggregating review scores in real-time as new reviews come in, and serving business detail pages with rich media from a global CDN.",
        requirements: {
            readsPerSec: 100000,
            writesPerSec: 5000,
            storageGB: 50000,
            latencyMs: 200,
            users: "~178M monthly unique visitors across web + app (2024)"
        },
        constraints: [
            "Geospatial search using QuadTree or Geohash index — find businesses within radius sorted by relevance and distance",
            "Compound search: category + location + price range + rating + open-now with sub-200ms response",
            "Review aggregation with Bayesian average rating (accounts for review count, not just mean score)",
            "Photo storage with thumbnails, CDN serving, and user-uploaded content moderation",
            "Business profile pages with hours, menu (for restaurants), and real-time busy-times based on check-in data",
            "Autocomplete for business names and categories with typo tolerance and location-biased results"
        ],
        hints: [
            {
                title: "Geospatial indexing",
                content: "Use a QuadTree to partition geographic space. Each leaf node contains businesses within that area. Proximity queries traverse the tree to find nearby leaves, then filter by radius. Alternatively, use Geohash with prefix matching."
            },
            {
                title: "Search with filters",
                content: "Use Elasticsearch with geo_distance queries for proximity search. Add filters for category, price range, and open hours. Pre-compute popular searches per geohash cell for instant results."
            },
            {
                title: "Review aggregation",
                content: "Cache aggregate ratings in Redis. On new review, update the running average atomically. Use Bayesian average to prevent businesses with few 5-star reviews from outranking those with hundreds of 4.5-star reviews."
            },
            {
                title: "Advanced: QuadTree sharding",
                content: "Build a distributed QuadTree where each server owns a geographic partition. Dense areas (Manhattan) get finer-grained partitions than rural areas. A routing layer maps the user's search center to the relevant partition servers. For boundary queries (search radius spans multiple partitions), query adjacent partitions in parallel and merge results."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "search",
                    x: 720,
                    y: 350
                },
                {
                    componentId: "geospatial-index",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "object-storage",
                    x: 880,
                    y: 200
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 350
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "geospatial-index"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Geo-spatial",
            "Search",
            "Reviews",
            "QuadTree"
        ]
    },
    {
        id: "tiktok",
        title: "TikTok / Short Video",
        difficulty: "Hard",
        description: "Design a short-form video platform like TikTok that serves personalized video feeds to over 1.5 billion monthly active users. TikTok's recommendation engine is its core competitive advantage — it builds interest graphs from watch-time signals (not just social graphs) to surface relevant content even for new users within minutes. The platform processes billions of video views per day with a multi-petabyte content library — the key challenges are building the For You Page (FYP) recommendation algorithm, a high-throughput video transcoding pipeline that processes millions of uploads daily, and a content moderation system that reviews content before publication.",
        requirements: {
            readsPerSec: 500000,
            writesPerSec: 50000,
            storageGB: 5000000,
            latencyMs: 100,
            users: "1.5B MAU"
        },
        constraints: [
            "For You Page recommendation combining collaborative filtering, content embeddings, and real-time engagement signals",
            "Video transcoding pipeline: ingest → content moderation → transcode (multiple resolutions/bitrates) → CDN distribution",
            "Content moderation at upload time — automated detection of policy violations (nudity, violence, misinformation) before publication",
            "Creator economy features: live gifting, creator fund payouts, branded content marketplace",
            "Duet and Stitch features requiring frame-accurate video composition on server or client",
            "Global CDN with regional content regulations — different content availability per country"
        ],
        hints: [
            {
                title: "Recommendation engine",
                content: "TikTok's FYP uses an interest graph built from watch-time signals (not social graph). Track: watch duration, replays, shares, comments, follows-from-video. Feed these signals into a real-time stream processor."
            },
            {
                title: "Video pipeline",
                content: "Upload to object storage → push processing job to message queue → workers transcode to 360p/720p/1080p → push to CDN. Run content moderation in parallel with transcoding to minimize time-to-publish."
            },
            {
                title: "Feed serving",
                content: "Pre-compute a ranked candidate pool per user. On each swipe, serve the next video from the pool. Refresh the pool every few minutes using the latest engagement signals."
            },
            {
                title: "Advanced: Two-tower recommendation",
                content: "Use a two-tower neural network: one tower encodes user interests (watch history, engagement patterns), the other encodes video features (visual embeddings, audio, text, hashtags). Compute dot-product similarity to score candidates. Generate candidates from multiple sources: interest graph, trending, geographic, and following — then blend and re-rank using the two-tower model for the final feed."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "search",
                    x: 880,
                    y: 80
                },
                {
                    componentId: "stream-processor",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "cdn",
                    target: "object-storage"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "search"
                },
                {
                    source: "message-queue",
                    target: "stream-processor"
                },
                {
                    source: "message-queue",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Recommendations",
            "CDN",
            "Streaming",
            "ML"
        ]
    },
    {
        id: "message-queue-design",
        title: "Distributed Message Queue (Kafka)",
        difficulty: "Hard",
        description: "Design a distributed message queue system like Apache Kafka that provides durable, ordered, and high-throughput message delivery between services. Kafka processes trillions of messages per day at companies like LinkedIn, handling 1M+ messages/second per broker — the core challenges are designing a partitioned commit log that supports parallel consumption, implementing consumer group coordination with partition rebalancing, achieving exactly-once semantics through idempotent producers and transactional writes, and maintaining data durability through in-sync replica (ISR) sets with configurable acknowledgment levels.",
        requirements: {
            readsPerSec: 1000000,
            writesPerSec: 1000000,
            storageGB: 500000,
            latencyMs: 5,
            users: "N/A (infrastructure)"
        },
        constraints: [
            "Partitioned commit log — messages within a partition are strictly ordered and assigned monotonic offsets",
            "Consumer groups with automatic partition assignment — each partition consumed by exactly one consumer in the group",
            "In-Sync Replica (ISR) set — configurable replication factor (typically 3) with leader-based writes and follower replication",
            "Exactly-once semantics via idempotent producers (sequence numbers per partition) and transactional writes across partitions",
            "Log compaction — retain only the latest value per key for changelog/snapshot topics",
            "Configurable retention: time-based (7 days default) or size-based (per partition log segment cleanup)"
        ],
        hints: [
            {
                title: "Partitioned log",
                content: "Model each topic as N partitions. Each partition is an append-only log stored on disk. Producers hash the message key to determine the target partition. This enables parallel writes and ordered consumption per partition."
            },
            {
                title: "Replication for durability",
                content: "Each partition has a leader and N-1 follower replicas. Producers write to the leader, followers pull and replicate. The ISR (In-Sync Replica) set tracks which followers are caught up. Configurable acks: 0 (fire-and-forget), 1 (leader only), all (all ISR replicas)."
            },
            {
                title: "Consumer groups",
                content: "A consumer group coordinator assigns partitions to consumers. When a consumer joins or leaves, trigger a rebalance. Store consumer offsets in an internal __consumer_offsets topic for durability."
            },
            {
                title: "Advanced: Zero-copy and page cache",
                content: "Kafka achieves high throughput by leveraging the OS page cache for reads (no application-level cache needed) and zero-copy transfers (sendfile syscall) from disk to network socket. Sequential disk writes are faster than random memory access — Kafka's append-only log exploits this for 800MB/s+ write throughput per broker on commodity SSDs."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "load-balancer",
                    x: 100,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 300,
                    y: 250
                },
                {
                    componentId: "nosql-db",
                    x: 500,
                    y: 150
                },
                {
                    componentId: "monitoring",
                    x: 500,
                    y: 350
                },
                {
                    componentId: "coordination-service",
                    x: 300,
                    y: 100
                },
                {
                    componentId: "service-discovery",
                    x: 300,
                    y: 400
                }
            ],
            edges: [
                {
                    source: "load-balancer",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "coordination-service"
                },
                {
                    source: "app-server",
                    target: "service-discovery"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Queue",
            "Distributed",
            "Replication",
            "Streaming"
        ]
    },
    {
        id: "digital-wallet",
        title: "Digital Wallet / UPI",
        difficulty: "Hard",
        description: "Design a digital wallet and P2P payment system like Google Pay, PayTM, or UPI (Unified Payments Interface). India's UPI network processes over 16 billion transactions per month across 600+ banks — the core challenges are maintaining strict financial consistency with double-entry bookkeeping, achieving effectively-once (idempotent) transaction execution through idempotency keys — retries are safe and never re-debit (critical when network timeouts cause retries), implementing distributed locks for concurrent balance updates, and meeting regulatory requirements for transaction audit trails, KYC compliance, and settlement reconciliation with banking partners.",
        requirements: {
            readsPerSec: 50000,
            writesPerSec: 30000,
            storageGB: 10000,
            latencyMs: 200,
            users: "100M DAU"
        },
        constraints: [
            "Effectively-once (idempotent) transaction execution using idempotency keys — retries must return the same result without re-debiting",
            "Double-entry bookkeeping — every transfer creates a debit on sender and credit on receiver that sum to zero",
            "Distributed locks for balance updates — prevent race conditions when concurrent transactions hit the same wallet",
            "KYC (Know Your Customer) compliance with tiered wallet limits based on verification level",
            "Transaction history with complete audit trail — every state transition logged for regulatory reporting",
            "Bank settlement reconciliation — daily batch settlement with partner banks, handling discrepancies automatically"
        ],
        hints: [
            {
                title: "Idempotency first",
                content: "Every transaction API call must include an idempotency key. Before executing, check if this key was already processed. Store the key and result atomically with the transaction in the same database transaction."
            },
            {
                title: "Balance management",
                content: "Use a SQL database with SERIALIZABLE isolation for wallet balances. Use SELECT FOR UPDATE or distributed locks to prevent concurrent transactions from creating negative balances."
            },
            {
                title: "Transaction state machine",
                content: "Model each transaction as: initiated → debited → credited → completed (or failed → reversed). Use a message queue for reliable state transitions with compensating transactions on failure."
            },
            {
                title: "Advanced: Saga with compensation",
                content: "For P2P transfers: Step 1: Debit sender's wallet (with distributed lock). Step 2: Credit receiver's wallet. If Step 2 fails, execute compensating action (re-credit sender). Use a message queue to orchestrate saga steps. Store the saga state so it can resume after any failure. This achieves eventual consistency while maintaining financial accuracy."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "auth-service",
                    x: 350,
                    y: 100
                },
                {
                    componentId: "rate-limiter",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 100
                },
                {
                    componentId: "distributed-lock",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "message-queue",
                    x: 720,
                    y: 420
                },
                {
                    componentId: "sql-db",
                    x: 720,
                    y: 200
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 100
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "auth-service"
                },
                {
                    source: "api-gateway",
                    target: "rate-limiter"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "distributed-lock"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "message-queue",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "ACID",
            "Idempotent",
            "Ledger",
            "Payments"
        ]
    },
    {
        id: "code-editor",
        title: "Online Code Editor",
        difficulty: "Medium",
        description: "Design an online code editor and execution platform like Replit, CodeSandbox, or VS Code for the Web. The system supports real-time collaborative editing, sandboxed code execution in 50+ programming languages, and a virtual file system per project. Replit serves 20+ million developers — the core challenges are implementing real-time collaboration with conflict resolution (OT/CRDT) across multiple cursors, securely sandboxing user code execution in isolated containers with resource limits (CPU, memory, network), and providing Language Server Protocol (LSP) features (autocomplete, go-to-definition, error diagnostics) with low latency.",
        requirements: {
            readsPerSec: 30000,
            writesPerSec: 20000,
            storageGB: 50000,
            latencyMs: 100,
            users: "10M DAU"
        },
        constraints: [
            "Real-time collaborative editing using OT or CRDT with multi-cursor support and conflict resolution",
            "Sandboxed code execution in isolated containers (gVisor/Firecracker) with CPU, memory, and network resource limits",
            "Language Server Protocol (LSP) integration for autocomplete, diagnostics, go-to-definition across 50+ languages",
            "Virtual file system per project with version history and git integration",
            "Terminal emulation with PTY (pseudo-terminal) forwarding over WebSocket",
            "Instant project boot — sub-5-second cold start using pre-warmed container pools and filesystem snapshots"
        ],
        hints: [
            {
                title: "Collaboration layer",
                content: "Use a WebSocket server for real-time sync. Implement OT (Operational Transformation) or CRDT for conflict-free concurrent edits. Broadcast cursor positions and selections to all collaborators."
            },
            {
                title: "Sandboxed execution",
                content: "Run user code in lightweight VMs (Firecracker) or sandboxed containers (gVisor). Pre-warm a pool of containers per language to minimize cold-start latency. Enforce strict resource limits and network isolation."
            },
            {
                title: "File system design",
                content: "Use object storage for persistent project files with a NoSQL metadata database. Cache active project files in memory on the execution container for fast reads. Sync changes back to object storage on save."
            },
            {
                title: "Advanced: Snapshot and restore",
                content: "Use filesystem snapshots (overlayfs) to create instant project forks. Pre-build base images for each language with common dependencies pre-installed. On project open, layer the user's files on top of the base image using an overlay filesystem — this gives sub-second project boot times instead of installing dependencies from scratch."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "dns",
                    x: 50,
                    y: 250
                },
                {
                    componentId: "cdn",
                    x: 200,
                    y: 80
                },
                {
                    componentId: "load-balancer",
                    x: 200,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 350,
                    y: 250
                },
                {
                    componentId: "websocket-server",
                    x: 350,
                    y: 420
                },
                {
                    componentId: "app-server",
                    x: 530,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 530,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 530,
                    y: 420
                },
                {
                    componentId: "nosql-db",
                    x: 720,
                    y: 250
                },
                {
                    componentId: "object-storage",
                    x: 720,
                    y: 80
                },
                {
                    componentId: "monitoring",
                    x: 880,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "dns",
                    target: "cdn"
                },
                {
                    source: "dns",
                    target: "load-balancer"
                },
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "load-balancer",
                    target: "websocket-server"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "websocket-server",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "nosql-db"
                },
                {
                    source: "app-server",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Collaboration",
            "Sandbox",
            "WebSocket",
            "LSP"
        ]
    },
    {
        id: "cicd-pipeline",
        title: "CI/CD Pipeline",
        difficulty: "Medium",
        description: "Design a continuous integration and continuous deployment platform like GitHub Actions, GitLab CI, or Jenkins. The system orchestrates build pipelines triggered by code commits, runs tests in parallel across isolated environments, stores build artifacts, and deploys to production using strategies like blue-green or canary. GitHub Actions processes millions of workflow runs daily — the core challenges are efficiently scheduling and executing build jobs across a fleet of heterogeneous runners, managing artifact storage and caching for fast builds, and implementing reliable deployment orchestration with automatic rollback on failure detection.",
        requirements: {
            readsPerSec: 20000,
            writesPerSec: 10000,
            storageGB: 200000,
            latencyMs: 500,
            users: "5M DAU"
        },
        constraints: [
            "Pipeline orchestration: define workflows as DAGs (directed acyclic graphs) of jobs with dependency edges",
            "Parallel test execution across isolated runners — scale runner fleet dynamically based on queue depth",
            "Build caching: cache dependencies (node_modules, Maven repo) and Docker layers across runs for 3-10x speedup",
            "Artifact storage with retention policies — store build outputs, test reports, and coverage data",
            "Deployment strategies: blue-green (instant switch), canary (gradual rollout with health checks), rolling update",
            "Automatic rollback on deployment failure — detect health check failures and revert to the previous known-good version"
        ],
        hints: [
            {
                title: "Job scheduling",
                content: "Use a message queue with priority lanes for different job types. A scheduler service parses the workflow DAG, resolves dependencies, and enqueues jobs as their dependencies complete."
            },
            {
                title: "Runner management",
                content: "Runners pull jobs from the queue, execute in isolated containers, and report results. Use auto-scaling (scale runners based on queue depth) with a minimum warm pool to avoid cold-start delays."
            },
            {
                title: "Build caching",
                content: "Cache dependencies in object storage keyed by lock-file hash. On each build, check if a cache exists for the current dependency set. This can reduce build times by 3-10x for dependency-heavy projects."
            },
            {
                title: "Advanced: Canary deployments",
                content: "Deploy the new version to 5% of traffic (canary). Monitor error rates, latency p99, and custom health metrics for 10 minutes. If metrics stay within thresholds, gradually increase to 25% → 50% → 100%. If any metric degrades, automatically roll back to the previous version and notify the team. Store deployment state in a SQL database for auditability."
            }
        ],
        referenceSolution: {
            nodes: [
                {
                    componentId: "load-balancer",
                    x: 100,
                    y: 250
                },
                {
                    componentId: "api-gateway",
                    x: 250,
                    y: 250
                },
                {
                    componentId: "app-server",
                    x: 420,
                    y: 250
                },
                {
                    componentId: "cache",
                    x: 420,
                    y: 80
                },
                {
                    componentId: "message-queue",
                    x: 420,
                    y: 420
                },
                {
                    componentId: "sql-db",
                    x: 620,
                    y: 250
                },
                {
                    componentId: "object-storage",
                    x: 620,
                    y: 80
                },
                {
                    componentId: "task-scheduler",
                    x: 620,
                    y: 420
                },
                {
                    componentId: "monitoring",
                    x: 820,
                    y: 250
                }
            ],
            edges: [
                {
                    source: "load-balancer",
                    target: "api-gateway"
                },
                {
                    source: "api-gateway",
                    target: "app-server"
                },
                {
                    source: "app-server",
                    target: "cache"
                },
                {
                    source: "app-server",
                    target: "message-queue"
                },
                {
                    source: "app-server",
                    target: "sql-db"
                },
                {
                    source: "message-queue",
                    target: "task-scheduler"
                },
                {
                    source: "task-scheduler",
                    target: "object-storage"
                },
                {
                    source: "app-server",
                    target: "monitoring"
                }
            ]
        },
        tags: [
            "Pipeline",
            "Deployment",
            "Orchestration",
            "Caching"
        ]
    }
];
function getProblemById(id) {
    // Check predefined problems first
    const predefined = PROBLEMS.find((p)=>p.id === id);
    if (predefined) return predefined;
    // Check custom problems
    if (id.startsWith("custom-")) {
        const custom = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomProblemsStore"].getState().problems.find((p)=>p.id === id);
        if (custom) {
            // Return a Problem-compatible shape (no hints or reference solution)
            return {
                id: custom.id,
                title: custom.title,
                difficulty: custom.difficulty,
                description: custom.description,
                requirements: custom.requirements,
                constraints: custom.constraints,
                hints: [],
                referenceSolution: {
                    nodes: [],
                    edges: []
                },
                tags: custom.tags
            };
        }
    }
    return undefined;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/data/components.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPONENT_CATEGORIES",
    ()=>COMPONENT_CATEGORIES,
    "SYSTEM_COMPONENTS",
    ()=>SYSTEM_COMPONENTS,
    "getComponentById",
    ()=>getComponentById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customComponentsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/customComponentsStore.ts [app-client] (ecmascript)");
;
const SYSTEM_COMPONENTS = [
    // Networking
    {
        id: "dns",
        label: "DNS",
        category: "networking",
        icon: "Globe",
        maxQPS: 100000,
        latencyMs: 10,
        scalable: true,
        stateful: false,
        description: "Domain Name System — resolves human-readable domain names (e.g., example.com) to IP addresses. Every internet request starts with a DNS lookup, making it the first hop in any system design. Services like AWS Route 53 and Google Cloud DNS also support health-checked routing and geo-based load balancing."
    },
    {
        id: "cdn",
        label: "CDN",
        category: "networking",
        icon: "Cloudy",
        maxQPS: 500000,
        latencyMs: 15,
        scalable: true,
        stateful: false,
        description: "Content Delivery Network — caches static assets (images, JS, CSS, videos) at edge locations close to users, reducing latency from hundreds of milliseconds to low double digits. Essential for any read-heavy or media-heavy system serving a global audience. Examples include Amazon CloudFront, Google Cloud CDN, and Cloudflare."
    },
    {
        id: "load-balancer",
        label: "Load Balancer",
        category: "networking",
        icon: "Network",
        maxQPS: 1000000,
        latencyMs: 1,
        scalable: true,
        stateful: false,
        description: "Distributes incoming traffic across multiple backend servers using algorithms like round-robin, least-connections, or weighted routing. Prevents any single server from becoming a bottleneck and enables zero-downtime deployments via rolling updates. AWS ALB/NLB, Google Cloud Load Balancing, and HAProxy are common choices."
    },
    {
        id: "api-gateway",
        label: "API Gateway",
        category: "networking",
        icon: "Router",
        maxQPS: 50000,
        latencyMs: 10,
        scalable: true,
        stateful: false,
        description: "Single entry point for all API requests — handles routing, authentication, rate limiting, request transformation, and protocol translation. Use it when you have multiple microservices behind a unified API surface. AWS API Gateway, Kong, and Google Cloud Apigee are popular managed options. Note that managed offerings enforce account-level quotas — AWS API Gateway defaults to 10,000 RPS per account — so the 50K QPS figure here reflects a self-hosted or scaled-out gateway tier."
    },
    {
        id: "rate-limiter",
        label: "Rate Limiter",
        category: "networking",
        icon: "ShieldAlert",
        maxQPS: 80000,
        latencyMs: 1,
        scalable: true,
        stateful: true,
        description: "Throttles requests per client, IP, or API key to protect downstream services from abuse, DDoS attacks, and traffic spikes. Typically implemented using token bucket or sliding window algorithms backed by Redis. Often built into API gateways like Kong, enforced at the edge via AWS WAF, or implemented as a standalone service."
    },
    // Compute
    {
        id: "app-server",
        label: "App Server",
        category: "compute",
        icon: "Server",
        maxQPS: 5000,
        latencyMs: 20,
        scalable: true,
        stateful: false,
        description: "Stateless application server that executes core business logic and serves API requests. Designed to scale horizontally — spin up more instances behind a load balancer to handle increased traffic. Runs on AWS EC2/ECS, Google Compute Engine, or containerized in Kubernetes pods."
    },
    {
        id: "auth-service",
        label: "Auth Service",
        category: "compute",
        icon: "KeyRound",
        maxQPS: 10000,
        latencyMs: 15,
        scalable: true,
        stateful: false,
        description: "Dedicated authentication and authorization service that handles user login, token issuance (JWT/OAuth2), session management, and permission checks. Centralizing auth prevents security logic from being scattered across microservices. Examples include AWS Cognito, Auth0, Firebase Auth, and Google Cloud Identity Platform."
    },
    // Storage
    {
        id: "sql-db",
        label: "SQL Database",
        category: "storage",
        icon: "Database",
        maxQPS: 10000,
        latencyMs: 8,
        scalable: false,
        stateful: true,
        description: "Relational database providing ACID transactions, strong consistency, and structured schemas with SQL queries. Best for data with complex relationships, joins, and strict integrity requirements (e.g., financial transactions, user accounts). Examples include Amazon RDS (PostgreSQL/MySQL), Google Cloud SQL, and Amazon Aurora."
    },
    {
        id: "nosql-db",
        label: "NoSQL Database",
        category: "storage",
        icon: "HardDrive",
        maxQPS: 50000,
        latencyMs: 3,
        scalable: true,
        stateful: true,
        description: "Non-relational database optimized for flexible schemas, horizontal scaling, and high-throughput workloads. Choose it when you need low-latency key-value lookups, wide-column storage, or document-oriented data without complex joins. Amazon DynamoDB, Google Cloud Bigtable, MongoDB Atlas, and Apache Cassandra are widely used."
    },
    {
        id: "cache",
        label: "Cache / Redis",
        category: "storage",
        icon: "Zap",
        maxQPS: 100000,
        latencyMs: 1,
        scalable: true,
        stateful: true,
        description: "In-memory data store delivering sub-millisecond read latency for frequently accessed data, session storage, leaderboards, and real-time counters. Placing a cache between your app servers and database can reduce DB load by 80-90% for read-heavy workloads. Amazon ElastiCache (Redis/Memcached) and Google Cloud Memorystore are managed options."
    },
    {
        id: "object-storage",
        label: "Object Storage",
        category: "storage",
        icon: "Archive",
        maxQPS: 25000,
        latencyMs: 75,
        scalable: true,
        stateful: true,
        description: "Highly durable blob/object storage for unstructured data like images, videos, backups, and static website assets. Offers virtually unlimited capacity with 99.999999999% (11 nines) durability. Amazon S3, Google Cloud Storage, and Azure Blob Storage are the industry standards, often paired with a CDN for fast delivery."
    },
    {
        id: "search",
        label: "Search / ES",
        category: "storage",
        icon: "Search",
        maxQPS: 20000,
        latencyMs: 10,
        scalable: true,
        stateful: true,
        description: "Full-text search engine that indexes and queries large volumes of text with features like fuzzy matching, faceted search, and relevance scoring. Use it when users need to search across product catalogs, logs, or content feeds. Elasticsearch (Amazon OpenSearch), Apache Solr, and Google Cloud Search are common choices."
    },
    // Messaging
    {
        id: "message-queue",
        label: "Message Queue",
        category: "messaging",
        icon: "MessageSquare",
        maxQPS: 100000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Asynchronous message broker that decouples producers from consumers, enabling reliable background processing, event-driven architectures, and traffic spike buffering. Critical for any workflow where synchronous processing would create bottlenecks or coupling. Apache Kafka, Amazon SQS/SNS, Google Cloud Pub/Sub, and RabbitMQ are widely adopted."
    },
    // Infrastructure
    {
        id: "service-mesh",
        label: "Service Mesh",
        category: "infrastructure",
        icon: "GitBranch",
        maxQPS: 80000,
        latencyMs: 2,
        scalable: true,
        stateful: false,
        description: "Transparent service-to-service communication layer that handles mutual TLS, retries, circuit breaking, load balancing, and distributed tracing between microservices. Use it when your microservice count grows beyond what manual configuration can manage. Istio, Linkerd, and AWS App Mesh are leading implementations."
    },
    {
        id: "monitoring",
        label: "Monitoring",
        category: "infrastructure",
        icon: "Activity",
        maxQPS: 500000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Observability stack for metrics collection, centralized logging, distributed tracing, and alerting. Every production system needs monitoring to detect outages, track SLOs, and debug performance issues. Prometheus + Grafana, AWS CloudWatch, Google Cloud Monitoring, Datadog, and the ELK stack are standard tools."
    },
    // Real-time
    {
        id: "websocket-server",
        label: "WebSocket Server",
        category: "compute",
        icon: "Radio",
        maxQPS: 50000,
        latencyMs: 2,
        scalable: true,
        stateful: true,
        description: "Maintains persistent bidirectional connections for real-time communication. Essential for chat apps, live notifications, collaborative editing, and gaming. Libraries like Socket.io and managed services like AWS API Gateway WebSocket APIs or Pusher handle millions of concurrent connections, with connection-to-server mapping stored in Redis."
    },
    {
        id: "task-scheduler",
        label: "Task Scheduler",
        category: "compute",
        icon: "Clock",
        maxQPS: 10000,
        latencyMs: 50,
        scalable: true,
        stateful: false,
        description: "Manages delayed, scheduled, and recurring background jobs with retry logic and dead-letter queues. Critical for email campaigns, report generation, data pipelines, and cleanup tasks. Celery, AWS Step Functions, Google Cloud Tasks, and Temporal are common implementations."
    },
    {
        id: "stream-processor",
        label: "Stream Processor",
        category: "compute",
        icon: "Waves",
        maxQPS: 200000,
        latencyMs: 10,
        scalable: true,
        stateful: true,
        description: "Processes continuous data streams in real-time for analytics, event processing, and ETL pipelines. Handles windowed aggregations, joins, and transformations on unbounded data. Apache Kafka Streams, Apache Flink, Spark Streaming, and AWS Kinesis Data Analytics are industry standards."
    },
    {
        id: "notification-service",
        label: "Notification Service",
        category: "compute",
        icon: "Bell",
        maxQPS: 50000,
        latencyMs: 100,
        scalable: true,
        stateful: false,
        description: "Orchestrates multi-channel delivery of push notifications, emails, SMS, and in-app messages with priority queuing, template rendering, and delivery tracking. Firebase Cloud Messaging, AWS SNS/SES, Twilio, and OneSignal handle billions of notifications daily with device token management."
    },
    // Advanced Storage
    {
        id: "graph-db",
        label: "Graph Database",
        category: "storage",
        icon: "Share2",
        maxQPS: 8000,
        latencyMs: 15,
        scalable: true,
        stateful: true,
        description: "Stores and queries highly connected data using nodes, edges, and properties — optimized for relationship traversals like friend-of-friend queries, recommendation engines, and fraud detection. Neo4j, Amazon Neptune, and JanusGraph significantly outperform relational joins for multi-hop traversals."
    },
    {
        id: "timeseries-db",
        label: "Time-Series DB",
        category: "storage",
        icon: "TrendingUp",
        maxQPS: 100000,
        latencyMs: 3,
        scalable: true,
        stateful: true,
        description: "Optimized for ingesting and querying time-stamped data with built-in downsampling, retention policies, and time-windowed aggregations. Essential for monitoring metrics, IoT sensor data, and financial tick data. InfluxDB, TimescaleDB, Amazon Timestream, and Prometheus TSDB are purpose-built for this workload."
    },
    {
        id: "data-warehouse",
        label: "Data Warehouse",
        category: "storage",
        icon: "Warehouse",
        maxQPS: 50,
        latencyMs: 5000,
        scalable: true,
        stateful: true,
        description: "Columnar analytical database designed for complex queries across terabytes/petabytes of historical data. Separates analytics from operational databases to prevent query load from impacting production. Google BigQuery, Amazon Redshift, Snowflake, and ClickHouse support SQL analytics at massive scale."
    },
    // Infrastructure
    {
        id: "service-discovery",
        label: "Service Discovery",
        category: "infrastructure",
        icon: "Compass",
        maxQPS: 50000,
        latencyMs: 1,
        scalable: true,
        stateful: true,
        description: "Enables microservices to find and communicate with each other dynamically without hardcoded addresses. Handles service registration, health checking, and DNS-based or API-based lookups. HashiCorp Consul, Apache ZooKeeper, etcd, and AWS Cloud Map are widely used for service mesh coordination."
    },
    {
        id: "reverse-proxy",
        label: "Reverse Proxy",
        category: "networking",
        icon: "Shield",
        maxQPS: 100000,
        latencyMs: 1,
        scalable: true,
        stateful: false,
        description: "Sits between clients and backend servers to handle SSL termination, request routing, caching, compression, and security filtering. Unlike a load balancer, it can also serve cached content, rewrite URLs, and add security headers. Nginx, Envoy, Cloudflare, and AWS CloudFront function as reverse proxies."
    },
    {
        id: "distributed-lock",
        label: "Distributed Lock",
        category: "infrastructure",
        icon: "Lock",
        maxQPS: 10000,
        latencyMs: 5,
        scalable: false,
        stateful: true,
        description: "Provides mutual exclusion across distributed systems to prevent race conditions in critical sections like inventory updates, leader election, and distributed transactions. Redis Redlock, Apache ZooKeeper recipes, and etcd lease-based locks are common implementations with trade-offs between safety and liveness."
    },
    {
        id: "circuit-breaker",
        label: "Circuit Breaker",
        category: "infrastructure",
        icon: "ShieldOff",
        maxQPS: 100000,
        latencyMs: 1,
        scalable: true,
        stateful: true,
        description: "Prevents cascading failures by monitoring downstream service health and short-circuiting requests when failure rates exceed a threshold. Implements three states: closed (normal), open (failing, reject immediately), and half-open (testing recovery). Netflix Hystrix popularized the pattern; Resilience4j, Envoy, and Istio provide modern implementations."
    },
    {
        id: "file-store",
        label: "File Store",
        category: "storage",
        icon: "FolderOpen",
        maxQPS: 10000,
        latencyMs: 10,
        scalable: true,
        stateful: true,
        description: "Network-attached file storage providing POSIX-compatible file system semantics for shared access across multiple compute instances. Supports hierarchical directories, file locking, and concurrent reads/writes. Amazon EFS, Google Cloud Filestore, and Azure Files are managed options. Use when applications need a traditional file system interface rather than object/blob APIs."
    },
    {
        id: "origin-shield",
        label: "Origin Shield",
        category: "networking",
        icon: "ShieldCheck",
        maxQPS: 200000,
        latencyMs: 5,
        scalable: true,
        stateful: false,
        description: "An additional caching layer between CDN edge locations and the origin server that reduces origin load by collapsing duplicate requests from multiple edge PoPs into a single origin fetch. Reduces origin bandwidth by 50-90% for popular content. AWS CloudFront Origin Shield, Cloudflare Tiered Cache, and Fastly Shield PoPs are implementations."
    },
    {
        id: "coordination-service",
        label: "Coordination Service",
        category: "infrastructure",
        icon: "Users",
        maxQPS: 20000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Provides distributed coordination primitives: leader election, configuration management, distributed barriers, and group membership. Built on consensus protocols (Raft/ZAB) for strong consistency. Apache ZooKeeper, etcd, and Consul are the primary implementations. Essential for distributed systems that need agreement on shared state."
    },
    {
        id: "custom",
        label: "Custom Component",
        category: "compute",
        icon: "Box",
        maxQPS: 50000,
        latencyMs: 10,
        scalable: true,
        stateful: false,
        description: "A generic component that can be renamed to represent any service, system, or infrastructure not available in the predefined component library. Double-click the node label on the canvas to rename it. Use this for specialized services like ML inference engines, recommendation services, fraud detection, content moderation, or any domain-specific component."
    },
    // ID & Counting
    {
        id: "id-generator",
        label: "ID Generator",
        category: "infrastructure",
        icon: "Fingerprint",
        maxQPS: 500000,
        latencyMs: 1,
        scalable: true,
        stateful: true,
        description: "Generates globally unique, sortable IDs across distributed nodes using algorithms like Twitter Snowflake, ULID, or UUID. Each node embeds a timestamp, machine ID, and sequence number to guarantee uniqueness without centralized coordination. Essential for database primary keys, URL shortening, event ordering, and sharding keys."
    },
    {
        id: "sharded-counter",
        label: "Sharded Counter",
        category: "infrastructure",
        icon: "Hash",
        maxQPS: 500000,
        latencyMs: 2,
        scalable: true,
        stateful: true,
        description: "Distributes a single logical counter across multiple shards to avoid hot-key bottlenecks under massive concurrent writes. Reads aggregate across shards with eventual consistency. Critical for like counts, view counters, follower counts, and real-time voting at scale. Typically backed by Redis or purpose-built counter tables with periodic reconciliation."
    },
    // Messaging
    {
        id: "pub-sub",
        label: "Pub/Sub",
        category: "messaging",
        icon: "Megaphone",
        maxQPS: 200000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Topic-based publish/subscribe messaging where each message is broadcast to all subscribers, unlike point-to-point queues where each message is consumed by one consumer. Enables event-driven fan-out for feeds, analytics pipelines, CDC, and cross-service event propagation. Google Cloud Pub/Sub, AWS SNS, and Apache Kafka topics are canonical implementations."
    },
    // Storage
    {
        id: "vector-db",
        label: "Vector Database",
        category: "storage",
        icon: "Brain",
        maxQPS: 10000,
        latencyMs: 10,
        scalable: true,
        stateful: true,
        description: "Stores high-dimensional vector embeddings and performs approximate nearest-neighbor (ANN) search for similarity matching. Powers recommendation engines, semantic search, image search, and RAG-based AI systems. Pinecone, Weaviate, Milvus, Qdrant, and pgvector are leading implementations using HNSW or IVF indexing algorithms."
    },
    {
        id: "geospatial-index",
        label: "Geospatial Index",
        category: "storage",
        icon: "MapPin",
        maxQPS: 50000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Indexes and queries location data using geohash, quadtree, R-tree, or H3 hexagonal grids for efficient nearest-neighbor and radius searches. Essential for ride-sharing, food delivery, local search, and any proximity-based system. PostGIS, Redis GEO (GEOADD/GEOSEARCH), Elasticsearch geo_point, and Google S2 library are common implementations."
    },
    // Infrastructure
    {
        id: "config-service",
        label: "Config Service",
        category: "infrastructure",
        icon: "Settings",
        maxQPS: 50000,
        latencyMs: 2,
        scalable: true,
        stateful: true,
        description: "Centralized dynamic configuration management for feature flags, A/B test parameters, and runtime settings without redeployment. Supports versioning, rollback, targeted rollouts by user segment, and real-time propagation to all service instances. AWS AppConfig, LaunchDarkly, Unleash, and etcd-backed config stores are common implementations."
    },
    {
        id: "secrets-manager",
        label: "Secrets Manager",
        category: "infrastructure",
        icon: "KeySquare",
        maxQPS: 10000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Stores credentials, API keys, and certificates encrypted at rest, handing them to services via short-lived leases rather than baking them into config or images. Supports automatic rotation, per-service access policies, and audit trails of every read. HashiCorp Vault, AWS Secrets Manager, and Google Secret Manager are the standard choices — distinct from a config service, which holds non-sensitive settings."
    },
    // Messaging
    {
        id: "event-bus",
        label: "Event Bus",
        category: "messaging",
        icon: "Antenna",
        maxQPS: 150000,
        latencyMs: 8,
        scalable: true,
        stateful: true,
        description: "Routes events from many producers to many consumers using content-based rules, so a publisher never needs to know who is listening. Differs from a plain topic by matching on event content and shape, and usually pairs with a schema registry to keep producers and consumers compatible as payloads evolve. Amazon EventBridge, NATS, and Azure Event Grid are typical implementations."
    },
    {
        id: "dead-letter-queue",
        label: "Dead Letter Queue",
        category: "messaging",
        icon: "Inbox",
        maxQPS: 50000,
        latencyMs: 5,
        scalable: true,
        stateful: true,
        description: "Captures messages that failed processing after a configured number of retries, keeping a poison message from blocking the main queue forever. Holds the payload plus failure metadata so engineers can inspect, fix, and replay it. Standard in Amazon SQS, RabbitMQ, and Kafka (as a dead-letter topic) — mentioning one signals you have thought about failure handling, not just the happy path."
    },
    {
        id: "cdc",
        label: "Change Data Capture",
        category: "messaging",
        icon: "Repeat",
        maxQPS: 80000,
        latencyMs: 12,
        scalable: true,
        stateful: true,
        description: "Streams row-level changes out of a database by tailing its replication log (Postgres WAL, MySQL binlog) rather than polling tables, so downstream caches, search indexes, and warehouses stay in sync without dual writes. This is the standard answer to keeping a search index consistent with the primary store. Debezium, AWS DMS, and Kafka Connect are the common tools."
    },
    // Compute
    {
        id: "serverless-function",
        label: "Serverless Function",
        category: "compute",
        icon: "Cpu",
        maxQPS: 30000,
        latencyMs: 25,
        scalable: true,
        stateful: false,
        description: "Runs short-lived, event-triggered code with no server to manage, scaling to zero when idle and out automatically under load. The trade-off is cold starts on the first invocation and hard limits on execution time and memory, which rules it out for long-running or latency-critical paths. AWS Lambda, Google Cloud Functions, and Cloudflare Workers are the usual examples."
    },
    {
        id: "batch-worker",
        label: "Batch Worker",
        category: "compute",
        icon: "Layers",
        maxQPS: 8000,
        latencyMs: 40,
        scalable: true,
        stateful: false,
        description: "Pulls jobs off a queue and processes them in the background — image resizing, report generation, email sends — so the request path returns immediately instead of blocking on slow work. Scales by adding workers, and should be idempotent since a job may be delivered more than once. Celery, Sidekiq, and Temporal workers are typical implementations."
    },
    {
        id: "ml-inference",
        label: "ML Inference",
        category: "compute",
        icon: "BrainCircuit",
        maxQPS: 5000,
        latencyMs: 50,
        scalable: true,
        stateful: false,
        description: "Serves predictions from a trained model behind an API, usually on GPU or other accelerators. Throughput comes from batching concurrent requests together, which trades a little latency for far better hardware utilisation — the central tuning decision in any serving design. TensorFlow Serving, NVIDIA Triton, and SageMaker endpoints are standard choices for ranking, recommendations, and moderation."
    },
    // Networking
    {
        id: "waf",
        label: "Web App Firewall",
        category: "networking",
        icon: "BrickWall",
        maxQPS: 200000,
        latencyMs: 3,
        scalable: true,
        stateful: false,
        description: "Inspects HTTP requests at the edge and blocks malicious ones — SQL injection, cross-site scripting, and known bad bots — before they reach your origin. Sits in front of the load balancer or CDN and complements a rate limiter, which caps volume rather than judging intent. AWS WAF, Cloudflare, and ModSecurity are common deployments."
    }
];
const COMPONENT_CATEGORIES = [
    {
        key: "networking",
        label: "Networking"
    },
    {
        key: "compute",
        label: "Compute"
    },
    {
        key: "storage",
        label: "Storage"
    },
    {
        key: "messaging",
        label: "Messaging"
    },
    {
        key: "infrastructure",
        label: "Infrastructure"
    }
];
function getComponentById(id) {
    const builtin = SYSTEM_COMPONENTS.find((c)=>c.id === id);
    if (builtin) return builtin;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customComponentsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponentsStore"].getState().getComponent(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/data/conceptLibrary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONCEPT_LIBRARY",
    ()=>CONCEPT_LIBRARY,
    "getConceptByComponentId",
    ()=>getConceptByComponentId
]);
const CONCEPT_LIBRARY = {
    dns: {
        componentId: "dns",
        whenToUse: [
            "Every system design — DNS is the first hop for resolving domain names to IPs",
            "Geographic load balancing via DNS-based routing (latency-based, geo-based)",
            "Failover and disaster recovery using health-checked DNS records",
            "Service discovery in simpler architectures using SRV records"
        ],
        whenNotToUse: [
            "Fine-grained load balancing — DNS TTL caching makes real-time traffic shifting unreliable",
            "Low-latency failover — DNS propagation can take minutes even with low TTLs"
        ],
        keyTradeoffs: [
            "TTL trade-off: low TTL = faster failover but more DNS queries; high TTL = better caching but slower updates",
            "DNS is a single point of failure if your provider goes down (consider multi-provider DNS)",
            "Clients cache DNS responses — you cannot force instant changes across all clients",
            "DNSSEC adds security but increases response size and lookup latency"
        ],
        interviewTips: [
            "Mention DNS as the first step in any request flow — shows you understand the full path",
            "Discuss Route 53 weighted routing or latency-based routing for global traffic management",
            "Bring up DNS caching layers: browser cache, OS cache, ISP resolver, authoritative server"
        ],
        commonPatterns: [
            {
                name: "GeoDNS",
                description: "Route users to the nearest data center based on their geographic location"
            },
            {
                name: "Weighted Routing",
                description: "Distribute traffic across endpoints by weight — useful for canary deployments"
            },
            {
                name: "Failover DNS",
                description: "Health-checked primary/secondary records that automatically redirect on failure"
            }
        ],
        realWorldExamples: [
            "AWS Route 53 handles trillions of DNS queries per year with 100% SLA",
            "Netflix uses DNS-based global load balancing to route users to the nearest region",
            "GitHub uses Anycast DNS to direct users to the closest edge PoP"
        ]
    },
    cdn: {
        componentId: "cdn",
        whenToUse: [
            "Serving static assets (images, JS, CSS, videos) to a global audience with low latency",
            "Read-heavy content delivery where data changes infrequently",
            "Protecting origin servers from traffic spikes by absorbing load at the edge",
            "Reducing bandwidth costs — CDN edge caches offload origin egress traffic"
        ],
        whenNotToUse: [
            "Highly dynamic, personalized content that cannot be cached (e.g., user-specific API responses)",
            "Small-scale single-region applications where the origin is already close to all users",
            "Real-time data that must always be fresh — cache invalidation adds complexity"
        ],
        keyTradeoffs: [
            "Cache invalidation complexity: purging stale content across thousands of edge nodes takes time",
            "Cost: CDN bandwidth is cheaper than origin, but high-traffic video delivery bills add up",
            "Cold cache problem: first request to a new edge PoP still hits the origin",
            "Dynamic content at the edge (edge compute) is powerful but adds architectural complexity"
        ],
        interviewTips: [
            "Mention CDN as essential for any system serving media — interviewers expect it",
            "Discuss pull vs push CDN models and when each is appropriate",
            "Bring up cache-control headers (max-age, s-maxage, stale-while-revalidate) to show depth"
        ],
        commonPatterns: [
            {
                name: "Pull-based CDN",
                description: "Edge fetches from origin on cache miss, caches response for subsequent requests"
            },
            {
                name: "Push-based CDN",
                description: "Origin proactively pushes content to edge nodes before users request it"
            },
            {
                name: "Edge Compute",
                description: "Run logic at CDN edge (Cloudflare Workers, Lambda@Edge) for personalization without origin round-trips"
            }
        ],
        realWorldExamples: [
            "Netflix uses its Open Connect CDN to serve 15% of global internet traffic from ISP-embedded servers",
            "Cloudflare CDN operates 300+ edge PoPs serving 50M+ HTTP requests per second",
            "YouTube uses Google's CDN to deliver over 1 billion hours of video per day globally"
        ]
    },
    "origin-shield": {
        componentId: "origin-shield",
        whenToUse: [
            "Multi-PoP CDN deployments where many edge locations independently miss cache and each hits the origin",
            "Protecting a capacity-limited origin from thundering-herd cache-miss storms (e.g., after a purge or for viral content)",
            "Improving overall cache hit ratio — edges fetch from the shield, which is far more likely to have the object warm",
            "Reducing origin egress costs by collapsing many edge fetches into few origin fetches"
        ],
        whenNotToUse: [
            "Small sites served from one or few PoPs with low traffic — the extra layer adds latency without benefit",
            "Latency-sensitive dynamic content that cannot be cached — every miss still traverses an extra hop"
        ],
        keyTradeoffs: [
            "Extra hop on cache miss: edge -> shield -> origin adds latency compared to edge -> origin directly",
            "Shield placement matters: choose a shield region close to the origin so the final fetch leg is short",
            "Request collapsing deduplicates concurrent misses for the same object, but waiting requests queue behind the single fetch",
            "The shield is itself a traffic concentration point — it must be sized and replicated so it does not become a bottleneck"
        ],
        interviewTips: [
            "Bring up origin shield when asked 'what happens when the CDN misses?' — it shows you think beyond the edge layer",
            "Explain request collapsing: N concurrent edge misses for one object become a single origin fetch",
            "Mention that a shared mid-tier cache raises hit ratio because all edges benefit from each other's fetches"
        ],
        commonPatterns: [
            {
                name: "Mid-Tier Cache",
                description: "A centralized caching layer between edge PoPs and origin — edges fetch from the shield instead of the origin"
            },
            {
                name: "Request Collapsing",
                description: "Concurrent cache misses for the same object merge into a single origin request; all waiters share the response"
            },
            {
                name: "Shield Near Origin",
                description: "Place the shield in the region closest to the origin to minimize the final fetch leg and origin connection count"
            }
        ],
        realWorldExamples: [
            "Amazon CloudFront Origin Shield adds a centralized caching layer that improves cache hit ratio and reduces load on the origin",
            "Fastly's shielding designates a single POP as the shield so all other POPs fetch from it rather than the origin",
            "Video streaming platforms use shield tiers so a viral video's simultaneous edge misses do not stampede the origin"
        ]
    },
    "load-balancer": {
        componentId: "load-balancer",
        whenToUse: [
            "Distributing traffic across multiple backend instances for horizontal scaling",
            "Enabling zero-downtime deployments via rolling updates and connection draining",
            "Health checking backends and removing unhealthy instances from the pool",
            "SSL/TLS termination to offload encryption from application servers"
        ],
        whenNotToUse: [
            "Single-server setups where there is nothing to balance across",
            "Client-side load balancing in service mesh architectures may replace traditional LBs",
            "Needing raw TCP/UDP throughput, ultra-low latency, or millions of connections — choose an L4 (network) load balancer over an L7 (application) one rather than skipping load balancing"
        ],
        keyTradeoffs: [
            "Layer 4 (TCP) vs Layer 7 (HTTP): L4 is faster but L7 enables content-based routing, sticky sessions, and header inspection",
            "Single LB is a SPOF — always deploy in HA pairs or use managed cloud LBs",
            "Sticky sessions hurt even distribution and complicate scaling — prefer stateless backends",
            "Algorithm choice matters: round-robin is simple, least-connections handles varying request costs better"
        ],
        interviewTips: [
            "Distinguish L4 vs L7 load balancing and explain when you would use each",
            "Mention consistent hashing for cache-friendly routing without sticky sessions",
            "Discuss health checks (active vs passive) and graceful connection draining during deploys"
        ],
        commonPatterns: [
            {
                name: "Round Robin",
                description: "Distribute requests sequentially across servers — simple but ignores server load"
            },
            {
                name: "Least Connections",
                description: "Route to the server with fewest active connections — better for varying request durations"
            },
            {
                name: "Consistent Hashing",
                description: "Hash request key to a server — ensures same key always hits the same server (good for caching)"
            }
        ],
        realWorldExamples: [
            "AWS ALB handles millions of requests per second with content-based routing rules",
            "Google Cloud Load Balancing provides a single anycast IP across all global regions",
            "Dropbox uses custom L4/L7 load balancers (Bandaid) to manage traffic to billions of files"
        ]
    },
    "api-gateway": {
        componentId: "api-gateway",
        whenToUse: [
            "Microservices architecture needing a unified API surface for external clients",
            "Cross-cutting concerns: authentication, rate limiting, logging, request transformation",
            "API versioning and protocol translation (REST to gRPC, GraphQL federation)",
            "Backend-for-frontend (BFF) pattern aggregating multiple service calls into one response"
        ],
        whenNotToUse: [
            "Simple monolithic applications where a single server handles everything",
            "Internal service-to-service calls — use service mesh instead of routing through a gateway",
            "When it becomes a bottleneck or single point of failure due to all traffic funneling through it"
        ],
        keyTradeoffs: [
            "Added latency: every request passes through an extra network hop",
            "Single point of failure if not deployed with HA — must be horizontally scaled",
            "Tight coupling risk: gateway becomes a monolith if too much business logic is added",
            "Operational complexity of maintaining routing rules, rate limits, and transformations"
        ],
        interviewTips: [
            "Mention API gateway as the entry point in any microservices design — shows architectural maturity",
            "Discuss the BFF pattern for mobile vs web clients needing different API shapes",
            "Explain how rate limiting at the gateway protects all downstream services uniformly"
        ],
        commonPatterns: [
            {
                name: "Backend for Frontend (BFF)",
                description: "Dedicated gateway per client type (web, mobile, IoT) with tailored aggregation"
            },
            {
                name: "Request Aggregation",
                description: "Gateway combines multiple microservice calls into a single client response"
            },
            {
                name: "Edge Authentication",
                description: "Validate JWT/OAuth tokens at the gateway so downstream services trust the identity"
            }
        ],
        realWorldExamples: [
            "Netflix Zuul gateway handles billions of API requests per day with dynamic routing filters",
            "Amazon API Gateway powers the AWS ecosystem with throttling and usage plans",
            "Uber uses a custom API gateway for routing across thousands of microservices"
        ]
    },
    "rate-limiter": {
        componentId: "rate-limiter",
        whenToUse: [
            "Protecting APIs from abuse, DDoS attacks, and runaway clients",
            "Enforcing usage quotas for tiered pricing (free vs paid API plans)",
            "Preventing thundering herd effects on downstream services during traffic spikes",
            "Ensuring fair resource allocation across multiple tenants"
        ],
        whenNotToUse: [
            "Internal trusted services where rate limiting adds unnecessary latency",
            "Batch processing jobs where throttling would unnecessarily slow down pipelines"
        ],
        keyTradeoffs: [
            "Too strict = legitimate users get blocked; too lenient = insufficient protection",
            "Distributed rate limiting requires shared state (Redis) which adds latency and a dependency",
            "Algorithm choice: token bucket allows bursts, sliding window is smoother but more memory-intensive",
            "Client-side vs server-side: client-side can be bypassed, server-side adds latency to every request"
        ],
        interviewTips: [
            "Compare token bucket vs sliding window vs fixed window algorithms and their burst behavior",
            "Mention Redis-backed distributed rate limiting for multi-instance deployments",
            "Discuss rate limiting headers (X-RateLimit-Remaining, Retry-After) for good API UX"
        ],
        commonPatterns: [
            {
                name: "Token Bucket",
                description: "Tokens refill at a fixed rate; requests consume tokens. Allows controlled bursts."
            },
            {
                name: "Sliding Window Log",
                description: "Track timestamps of each request in a window — precise but memory-intensive"
            },
            {
                name: "Fixed Window Counter",
                description: "Count requests per fixed time window — simple but allows burst at window boundaries"
            }
        ],
        realWorldExamples: [
            "GitHub API enforces 5,000 requests/hour per authenticated user",
            "Stripe rate limits API requests per second per key with graceful 429 responses",
            "Cloudflare rate limiting protects millions of websites from L7 DDoS attacks"
        ]
    },
    "app-server": {
        componentId: "app-server",
        whenToUse: [
            "Running core business logic that processes API requests and orchestrates services",
            "Stateless request handling that scales horizontally behind a load balancer",
            "REST/gRPC API endpoints serving client applications",
            "Any compute workload that benefits from auto-scaling based on traffic"
        ],
        whenNotToUse: [
            "Static content serving — use a CDN or reverse proxy instead",
            "Long-running background tasks — offload to task schedulers or message queue consumers",
            "Event-driven compute with sporadic traffic — consider serverless (Lambda) to avoid idle costs"
        ],
        keyTradeoffs: [
            "Stateless = easy to scale, but requires external session storage (Redis, DB) for user state",
            "Container vs VM: containers start faster and pack denser, but VMs offer stronger isolation",
            "Auto-scaling lag: spinning up new instances takes 30s-2min — pre-warm for predictable spikes",
            "Cost: always-on servers vs serverless — breakeven depends on traffic consistency"
        ],
        interviewTips: [
            "Always describe app servers as stateless — interviewers look for this as a scalability signal",
            "Mention horizontal scaling with auto-scaling groups and how you handle state externally",
            "Discuss graceful shutdown and health check endpoints for zero-downtime deployments"
        ],
        commonPatterns: [
            {
                name: "Stateless Horizontal Scaling",
                description: "Store all state externally (DB, cache) so any instance can handle any request"
            },
            {
                name: "Circuit Breaker",
                description: "Stop calling a failing downstream service and return fallback — prevents cascade failures"
            },
            {
                name: "Bulkhead Pattern",
                description: "Isolate resources per service dependency so one slow service does not exhaust all threads"
            }
        ],
        realWorldExamples: [
            "Instagram runs thousands of stateless Django app servers behind L7 load balancers",
            "Uber runs thousands of microservice instances in Kubernetes with auto-scaling",
            "Airbnb migrated from a Ruby monolith to hundreds of Java/Kotlin microservices"
        ]
    },
    "auth-service": {
        componentId: "auth-service",
        whenToUse: [
            "Centralizing authentication and authorization across multiple microservices",
            "JWT/OAuth2 token issuance, validation, and refresh flows",
            "Multi-factor authentication, SSO, and social login integration",
            "Fine-grained role-based access control (RBAC) or attribute-based access control (ABAC)"
        ],
        whenNotToUse: [
            "Extremely simple apps with a single service where auth logic is trivial",
            "Machine-to-machine communication that uses mutual TLS instead of token-based auth"
        ],
        keyTradeoffs: [
            "Centralized auth = single point of failure. Must be highly available with caching.",
            "JWT vs session tokens: JWTs are stateless but cannot be revoked instantly; sessions need server-side storage",
            "Token expiry: short-lived = more secure but more refresh traffic; long-lived = fewer refreshes but wider attack window",
            "Build vs buy: Auth0/Cognito reduce dev time but limit customization and add vendor lock-in"
        ],
        interviewTips: [
            "Explain JWT structure (header.payload.signature) and why you would use asymmetric keys for verification",
            "Discuss token refresh flows and how to handle revocation (blocklist or short TTL)",
            "Mention API gateway integration — validate tokens at the edge to reduce load on the auth service"
        ],
        commonPatterns: [
            {
                name: "OAuth 2.0 + OIDC",
                description: "Industry standard for delegated authorization and identity — supports multiple grant types"
            },
            {
                name: "Token Refresh",
                description: "Short-lived access tokens + long-lived refresh tokens balance security and UX"
            },
            {
                name: "Gateway-level Auth",
                description: "API gateway validates JWTs before forwarding — services trust the gateway's identity context"
            }
        ],
        realWorldExamples: [
            "Google uses OAuth 2.0 for all third-party API access across its entire ecosystem",
            "Auth0 handles 4.5 billion+ login transactions per month for thousands of companies",
            "Netflix centralizes auth via a custom edge service (Zuul filters) before requests reach microservices"
        ]
    },
    "sql-db": {
        componentId: "sql-db",
        whenToUse: [
            "Data with complex relationships requiring JOINs and referential integrity",
            "ACID transactions — financial data, inventory, user accounts",
            "Well-defined schema with structured data that evolves predictably",
            "Strong consistency requirements where eventual consistency is unacceptable"
        ],
        whenNotToUse: [
            "Massive horizontal scaling needs (>100k writes/sec) — sharding SQL is painful",
            "Unstructured or rapidly evolving schemas (logs, social feeds, IoT sensor data)",
            "Simple key-value lookups at ultra-low latency — a cache or NoSQL DB is better"
        ],
        keyTradeoffs: [
            "Vertical scaling has limits — horizontal sharding is complex (routing, cross-shard joins, rebalancing)",
            "Read replicas reduce read load but introduce replication lag (eventual consistency for reads)",
            "Normalization reduces storage and ensures consistency, but denormalization improves read performance",
            "ORM convenience vs raw SQL performance — ORMs can generate inefficient queries"
        ],
        interviewTips: [
            "Explain read replicas for scaling reads and when replication lag is acceptable",
            "Discuss sharding strategies (hash-based, range-based) and the problems they introduce",
            "Mention indexing strategy — B-tree vs hash indexes, covering indexes, and query plan analysis"
        ],
        commonPatterns: [
            {
                name: "Primary-Replica",
                description: "Write to primary, read from replicas — scales reads but introduces replication lag"
            },
            {
                name: "Sharding",
                description: "Partition data across multiple databases by a shard key — scales writes but complicates queries"
            },
            {
                name: "CQRS",
                description: "Separate read and write models — optimize each independently with different storage strategies"
            }
        ],
        realWorldExamples: [
            "Instagram uses PostgreSQL with extensive sharding to store billions of user records",
            "Shopify shards MySQL across hundreds of instances using application-level routing",
            "Stripe uses PostgreSQL for financial transactions requiring strict ACID guarantees"
        ]
    },
    "nosql-db": {
        componentId: "nosql-db",
        whenToUse: [
            "Massive write throughput with horizontal scaling (millions of writes/sec)",
            "Flexible or evolving schemas — document, key-value, or wide-column data models",
            "Low-latency key-value lookups at scale where consistency can be tuned",
            "Distributed workloads across multiple regions with eventual consistency"
        ],
        whenNotToUse: [
            "Complex queries with multi-table JOINs — NoSQL data modeling requires denormalization",
            "Strict ACID transactions across multiple entities (use SQL or NewSQL instead)",
            "Small-scale applications where a simple PostgreSQL instance handles everything"
        ],
        keyTradeoffs: [
            "Schema flexibility is a double-edged sword — no schema enforcement can lead to data quality issues",
            "Denormalization means faster reads but data duplication and complex update logic",
            "Tunable consistency (ONE, QUORUM, ALL) trades availability for consistency",
            "Access pattern driven design — you must know your queries upfront, unlike SQL"
        ],
        interviewTips: [
            "Explain CAP theorem and where your chosen NoSQL DB falls (CP vs AP)",
            "Discuss data modeling for access patterns — partition key design is critical for DynamoDB/Cassandra",
            "Mention when you would choose DynamoDB (key-value) vs MongoDB (document) vs Cassandra (wide-column)"
        ],
        commonPatterns: [
            {
                name: "Single Table Design",
                description: "DynamoDB pattern: store multiple entity types in one table with composite keys"
            },
            {
                name: "Wide-Column Model",
                description: "Cassandra pattern: denormalize and duplicate data for each query pattern"
            },
            {
                name: "Document Store",
                description: "MongoDB pattern: embed related data in a single document to avoid joins"
            }
        ],
        realWorldExamples: [
            "Amazon uses DynamoDB internally for shopping cart, session management, and catalog at massive scale",
            "Apple uses Cassandra for over 100 PB of data powering iCloud and other services",
            "MongoDB Atlas powers thousands of applications from startups to enterprises like eBay and Toyota"
        ]
    },
    cache: {
        componentId: "cache",
        whenToUse: [
            "Read-heavy workloads (>10:1 read/write ratio)",
            "Data accessed frequently with tolerance for slight staleness",
            "Reduce database load and latency for hot data",
            "Session storage, leaderboards, rate limiting counters"
        ],
        whenNotToUse: [
            "Write-heavy workloads where data changes faster than cache invalidates",
            "Data that must always be strongly consistent (financial balances)"
        ],
        keyTradeoffs: [
            "Cache invalidation is the hardest problem — TTL vs event-driven vs write-through",
            "Memory is expensive — cache only hot data, not everything",
            "Cache stampede risk: when cache expires and thousands of requests hit DB simultaneously",
            "Consistency: stale reads are possible with cache-aside pattern"
        ],
        interviewTips: [
            "Always mention your cache invalidation strategy — interviewers look for this",
            "Discuss cache-aside vs write-through vs write-behind and WHY you chose one",
            "Mention Redis Cluster for horizontal scaling and HA"
        ],
        commonPatterns: [
            {
                name: "Cache-Aside (Lazy Loading)",
                description: "App checks cache first, on miss reads from DB and populates cache"
            },
            {
                name: "Write-Through",
                description: "Every write goes to cache AND DB — consistent but higher write latency"
            },
            {
                name: "Write-Behind (Write-Back)",
                description: "Write to cache, async flush to DB — fast writes but data loss risk"
            }
        ],
        realWorldExamples: [
            "Twitter uses Redis for timeline caching (fan-out-on-write)",
            "Facebook's Memcached fleet caches billions of objects across data centers",
            "Discord uses Redis for real-time presence and rate limiting"
        ]
    },
    "object-storage": {
        componentId: "object-storage",
        whenToUse: [
            "Storing large unstructured blobs: images, videos, backups, logs, data lake files",
            "Virtually unlimited storage capacity with 11 nines (99.999999999%) durability",
            "Static website hosting or serving assets paired with a CDN",
            "Data archival and compliance — lifecycle policies move data to cold storage automatically"
        ],
        whenNotToUse: [
            "Frequently updated small records — use a database instead (object storage has high latency per operation)",
            "File system semantics needed (random writes, appends, directory listing) — use block/file storage",
            "Low-latency key-value lookups — S3 GET latency is ~100ms, too slow for hot path"
        ],
        keyTradeoffs: [
            "S3 historically had eventual consistency but now provides strong read-after-write consistency for all operations since December 2020",
            "Cost-effective for storage but egress bandwidth costs can be significant at scale",
            "No append or partial update — must rewrite entire object for any change",
            "Performance: S3 supports 5,500 GETs and 3,500 PUTs per prefix per second — prefix design matters"
        ],
        interviewTips: [
            "Mention S3 as the default for any media/file storage — interviewers expect it",
            "Discuss pre-signed URLs for secure direct uploads/downloads without proxying through your servers",
            "Bring up S3 + CDN pairing for serving static content globally at low latency"
        ],
        commonPatterns: [
            {
                name: "Pre-signed URLs",
                description: "Generate time-limited URLs so clients upload/download directly to S3 without proxying"
            },
            {
                name: "CDN + Origin",
                description: "S3 as CDN origin — CDN caches objects at edge, S3 stores the source of truth"
            },
            {
                name: "Lifecycle Policies",
                description: "Automatically transition objects from Standard to Glacier for cost optimization"
            }
        ],
        realWorldExamples: [
            "Dropbox stores over 500 PB of user files on a custom object storage system (Magic Pocket)",
            "Netflix stores all video masters and encoded variants on Amazon S3",
            "Airbnb uses S3 for all user-uploaded images with CloudFront CDN for delivery"
        ]
    },
    "file-store": {
        componentId: "file-store",
        whenToUse: [
            "Shared POSIX file system access across many servers — NFS, AWS EFS, Azure Files",
            "Legacy applications that expect a real file system: random writes, appends, directory listings, file locks",
            "ML training datasets or render-farm assets that many compute nodes must read from a shared mount",
            "CMS/WordPress-style uploads where multiple app servers read and write the same files"
        ],
        whenNotToUse: [
            "Web-scale media serving with no POSIX requirement — object storage + CDN is cheaper and scales further",
            "Structured records with frequent small updates — use a database instead",
            "Single-server workloads where local block storage is simpler and faster"
        ],
        keyTradeoffs: [
            "POSIX semantics (atomic renames, appends, locks) vs object storage's simple put/get model — convenience vs near-unlimited scale",
            "Network file systems add per-operation latency vs local disk — metadata-heavy workloads with many small files suffer most",
            "Managed services like EFS scale elastically but cost significantly more per GB than S3",
            "Concurrent-writer consistency is the hard part — NFS close-to-open consistency surprises developers used to local disks"
        ],
        interviewTips: [
            "Articulate the file vs object vs block storage decision — interviewers probe whether you know when POSIX is actually required",
            "Default to object storage for media and backups; reach for a shared file system only when the app genuinely needs file semantics",
            "Mention EFS/Azure Files as the managed lift-and-shift path for legacy apps that hardcode file system access"
        ],
        commonPatterns: [
            {
                name: "Shared Mount",
                description: "Many servers mount the same NFS/EFS volume — shared state for uploads, configs, or training data without app changes"
            },
            {
                name: "Lift and Shift",
                description: "Migrate a file-system-dependent legacy app to the cloud by swapping local disk for a managed file service"
            },
            {
                name: "Hot/Cold Tiering",
                description: "Keep active files on the file system and move cold files to object storage via lifecycle automation"
            }
        ],
        realWorldExamples: [
            "AWS EFS is a standard backing store for multi-instance WordPress and CMS deployments that need shared uploads",
            "VFX render farms mount shared NFS file systems so hundreds of render nodes read the same scene assets",
            "ML teams use shared file systems (EFS, FSx for Lustre) so distributed training jobs across many nodes read one dataset"
        ]
    },
    search: {
        componentId: "search",
        whenToUse: [
            "Full-text search across large document collections with relevance ranking",
            "Autocomplete, fuzzy matching, and typo-tolerant search experiences",
            "Log aggregation and analysis — searching terabytes of log data (ELK stack)",
            "Faceted search and filtering for e-commerce product catalogs"
        ],
        whenNotToUse: [
            "Simple exact-match lookups — use a database index or cache instead",
            "Primary data storage — search engines are secondary indexes, not source of truth",
            "Small datasets where SQL LIKE queries are fast enough"
        ],
        keyTradeoffs: [
            "Near-real-time: indexing has a delay (usually 1-2 seconds) before documents become searchable",
            "Denormalized data: search index duplicates data from primary DB, requiring sync pipelines",
            "Resource intensive: Elasticsearch clusters need significant RAM for inverted indexes and field data",
            "Relevance tuning is complex — BM25 scoring, boosting, synonyms require ongoing iteration"
        ],
        interviewTips: [
            "Explain inverted indexes and how they enable fast full-text search",
            "Discuss the data sync pipeline from primary DB to search index (CDC, event-driven updates)",
            "Mention Elasticsearch vs dedicated search (Algolia, Meilisearch) trade-offs for your use case"
        ],
        commonPatterns: [
            {
                name: "Inverted Index",
                description: "Map each term to a list of documents containing it — the core data structure of search engines"
            },
            {
                name: "CDC to Search",
                description: "Use change data capture to stream DB changes into the search index in near-real-time"
            },
            {
                name: "Search-as-a-Service",
                description: "Use managed search (Algolia, Elastic Cloud) to avoid operational overhead of clusters"
            }
        ],
        realWorldExamples: [
            "Wikipedia uses Elasticsearch (CirrusSearch) to power search across 60M+ articles in 300 languages",
            "Uber uses Elasticsearch for searching across drivers, riders, trips, and support tickets",
            "GitHub built a custom code search engine to search across 200M+ repositories, replacing an earlier Elasticsearch-based system"
        ]
    },
    "message-queue": {
        componentId: "message-queue",
        whenToUse: [
            "Decoupling producers from consumers for asynchronous processing",
            "Buffering traffic spikes — queue absorbs bursts while consumers process at their own pace",
            "Event-driven architectures where multiple services react to the same event",
            "Reliable delivery with at-least-once or exactly-once semantics for critical workflows"
        ],
        whenNotToUse: [
            "Synchronous request-response where the client needs an immediate result",
            "Simple direct service calls in a low-latency path where queueing adds unnecessary delay",
            "Tiny deployments where operational overhead of managing a broker is not justified"
        ],
        keyTradeoffs: [
            "At-least-once delivery means consumers MUST be idempotent to handle duplicate messages",
            "Ordering: Kafka guarantees per-partition ordering; SQS FIFO queues support up to 70,000 msg/sec with high-throughput mode",
            "Message retention: Kafka retains messages for replay; SQS deletes after processing — different use cases",
            "Complexity: adding a queue means eventual consistency, dead-letter queues, and monitoring for lag"
        ],
        interviewTips: [
            "Always mention idempotent consumers when discussing at-least-once delivery",
            "Distinguish Kafka (log-based, replay) from SQS/RabbitMQ (traditional queue, delete after consume)",
            "Discuss dead-letter queues for handling poison messages that repeatedly fail processing"
        ],
        commonPatterns: [
            {
                name: "Pub/Sub",
                description: "Publisher sends events to a topic; multiple subscribers each receive a copy independently"
            },
            {
                name: "Work Queue (Competing Consumers)",
                description: "Multiple consumers pull from the same queue — each message processed by exactly one consumer"
            },
            {
                name: "Event Sourcing",
                description: "Store all state changes as an immutable log of events — enables replay and audit trails"
            }
        ],
        realWorldExamples: [
            "LinkedIn built Apache Kafka to handle 7 trillion messages per day across its platform",
            "Uber uses Kafka for real-time trip events, matching, and surge pricing data pipelines",
            "Slack uses a job queue system to process billions of messages, notifications, and API webhooks"
        ]
    },
    "service-mesh": {
        componentId: "service-mesh",
        whenToUse: [
            "Large microservice deployments (50+ services) where manual networking config is unsustainable",
            "Mutual TLS (mTLS) for zero-trust service-to-service encryption",
            "Advanced traffic management: canary releases, traffic splitting, circuit breaking",
            "Distributed tracing and observability across service boundaries without code changes"
        ],
        whenNotToUse: [
            "Small number of services (< 10) where the operational overhead is not justified",
            "Monolithic architectures with no inter-service communication",
            "Latency-critical paths where sidecar proxy overhead (1-3ms) is unacceptable"
        ],
        keyTradeoffs: [
            "Sidecar proxy adds ~1-3ms latency to every inter-service call",
            "Significant operational complexity: control plane (Istiod), data plane (Envoy), CRDs",
            "Resource overhead: each pod runs an Envoy sidecar consuming CPU and memory",
            "Debugging becomes harder — issues can be in your code, the sidecar, or mesh configuration"
        ],
        interviewTips: [
            "Explain the sidecar pattern and why the mesh is transparent to application code",
            "Mention mTLS as the main security benefit — encrypts all internal traffic automatically",
            "Discuss when NOT to use a service mesh — shows you understand operational trade-offs"
        ],
        commonPatterns: [
            {
                name: "Sidecar Proxy",
                description: "Each service pod has an Envoy proxy sidecar that intercepts all inbound/outbound traffic"
            },
            {
                name: "Traffic Splitting",
                description: "Route a percentage of traffic to a canary version for safe progressive rollouts"
            },
            {
                name: "Circuit Breaking",
                description: "Envoy automatically stops sending traffic to a failing service to prevent cascade failures"
            }
        ],
        realWorldExamples: [
            "Lyft created Envoy proxy, now the data plane for most service meshes including Istio",
            "Google runs the largest Istio-based service mesh connecting services across its cloud",
            "Airbnb uses a service mesh for mTLS and observability across hundreds of microservices"
        ]
    },
    "circuit-breaker": {
        componentId: "circuit-breaker",
        whenToUse: [
            "Protecting services from cascading failures when a downstream dependency starts failing or slowing down",
            "Failing fast instead of letting threads and connections pile up waiting on a dead dependency",
            "Graceful degradation: return a fallback (cached data, default response) while the dependency recovers",
            "Synchronous service-to-service call paths in a microservices architecture"
        ],
        whenNotToUse: [
            "Simple in-process calls within a monolith — there is no network failure mode to guard against",
            "Cases where sensible timeouts and bounded retries with backoff already provide enough protection",
            "Asynchronous queue-based communication — the queue already decouples producers from consumer failures"
        ],
        keyTradeoffs: [
            "Three states: closed (traffic flows, failures counted), open (fail fast after threshold), half-open (limited probes test recovery)",
            "Threshold tuning is hard: too sensitive = the breaker trips on transient blips; too lenient = it never protects you",
            "Fallback quality matters — failing fast only helps if you have something reasonable to return to the caller",
            "Library-based (Resilience4j) vs infrastructure-based (Envoy/Istio outlier detection): fine-grained code control vs zero application changes"
        ],
        interviewTips: [
            "Walk through the state machine (closed -> open -> half-open -> closed) — interviewers expect you to know the transitions",
            "Pair circuit breakers with timeouts, retries with backoff, and bulkheads — they are complementary resilience patterns",
            "Mention that Netflix Hystrix popularized the pattern but is now in maintenance mode, with Resilience4j as its recommended successor"
        ],
        commonPatterns: [
            {
                name: "State Machine",
                description: "Closed passes traffic and counts failures; open fails fast; half-open lets a few probe requests through to test recovery"
            },
            {
                name: "Fallback Response",
                description: "On an open circuit, return cached data, a default value, or a degraded experience instead of an error"
            },
            {
                name: "Outlier Detection",
                description: "Service mesh proxies (Envoy) eject failing hosts from the load-balancing pool — circuit breaking without code changes"
            }
        ],
        realWorldExamples: [
            "Netflix built Hystrix to isolate dependency failures across its microservices; it is now in maintenance mode, succeeded by Resilience4j",
            "Envoy and Istio provide circuit breaking and outlier detection at the proxy layer for any service in the mesh",
            "Resilience4j is the standard circuit breaker library in modern Java/Spring microservice stacks"
        ]
    },
    monitoring: {
        componentId: "monitoring",
        whenToUse: [
            "Every production system — monitoring is non-negotiable for reliability",
            "SLO/SLA tracking with automated alerting on latency, error rate, and throughput",
            "Distributed tracing to debug latency across multi-service request flows",
            "Capacity planning using historical metrics trends and anomaly detection"
        ],
        whenNotToUse: [
            "Local development and testing — use debuggers and test assertions instead",
            "Trivial single-instance hobby apps where reading logs directly is sufficient"
        ],
        keyTradeoffs: [
            "High cardinality metrics (per-user, per-endpoint) are powerful but expensive to store and query",
            "Sampling trade-off: 100% trace collection gives complete visibility but high storage cost; sampling misses rare issues",
            "Alert fatigue: too many alerts = ignored alerts. Tune thresholds carefully.",
            "Push vs pull metrics: Prometheus pulls (simple), Datadog agent pushes (works behind NAT)"
        ],
        interviewTips: [
            "Mention the three pillars of observability: metrics, logs, and traces",
            "Discuss the RED method (Rate, Errors, Duration) for services and USE method for infrastructure",
            "Show you think about alerting — what to alert on, escalation policies, and runbooks",
            "State that monitoring is non-negotiable for production systems — the real question is what level of investment fits the system's scale and criticality"
        ],
        commonPatterns: [
            {
                name: "RED Method",
                description: "Monitor Rate (throughput), Errors (failures), Duration (latency) for every service"
            },
            {
                name: "Distributed Tracing",
                description: "Propagate trace IDs across services to visualize the full request path and latency breakdown"
            },
            {
                name: "Log Aggregation",
                description: "Centralize logs from all services (ELK, Loki) for searchable, correlated debugging"
            }
        ],
        realWorldExamples: [
            "Google SRE invented the four golden signals (latency, traffic, errors, saturation) for monitoring",
            "Uber uses Jaeger (which they created) for distributed tracing across thousands of microservices",
            "Netflix uses Atlas for real-time metrics processing handling billions of data points per minute"
        ]
    },
    "websocket-server": {
        componentId: "websocket-server",
        whenToUse: [
            "Real-time bidirectional communication: chat, live notifications, collaborative editing",
            "Live data feeds: stock tickers, sports scores, gaming state updates",
            "Server-initiated pushes where polling would be wasteful and add latency",
            "Multiplayer gaming or real-time collaboration requiring sub-100ms updates"
        ],
        whenNotToUse: [
            "Request-response APIs where the client initiates all interactions — use REST/gRPC",
            "Infrequent updates (once per minute) — Server-Sent Events or long polling is simpler",
            "Mobile apps with unreliable connections — persistent connections drain battery and may be killed by the OS"
        ],
        keyTradeoffs: [
            "Stateful connections: each client is pinned to a server, complicating horizontal scaling",
            "Need a pub/sub layer (Redis) for broadcasting messages across multiple WebSocket server instances",
            "Connection limits: each server can handle ~50k-100k concurrent connections depending on resources",
            "Reconnection logic is complex — handle network switches, mobile sleep, and graceful degradation"
        ],
        interviewTips: [
            "Explain the scaling challenge: sticky connections need a pub/sub backplane (Redis Pub/Sub or Kafka)",
            "Mention connection-to-server mapping stored in Redis for targeted message delivery",
            "Discuss fallback strategies: WebSocket -> SSE -> long polling for maximum compatibility"
        ],
        commonPatterns: [
            {
                name: "Pub/Sub Backplane",
                description: "Redis Pub/Sub or Kafka sits behind WebSocket servers to broadcast messages across all instances"
            },
            {
                name: "Connection Registry",
                description: "Map user IDs to WebSocket server IPs in Redis for targeted message delivery"
            },
            {
                name: "Room/Channel Model",
                description: "Group connections into rooms/channels so messages broadcast only to relevant subscribers"
            }
        ],
        realWorldExamples: [
            "Slack uses WebSockets for real-time message delivery to millions of concurrent users",
            "Discord maintains millions of concurrent WebSocket connections with Elixir/Rust",
            "Figma uses WebSockets for real-time collaborative design with a custom CRDT-inspired multiplayer system"
        ]
    },
    "task-scheduler": {
        componentId: "task-scheduler",
        whenToUse: [
            "Delayed or scheduled jobs: send email in 30 minutes, generate daily report at midnight",
            "Recurring cron-like tasks: cleanup, data aggregation, health checks",
            "Long-running workflows with retry logic, timeouts, and dead-letter queues",
            "Background processing that should not block the request-response path"
        ],
        whenNotToUse: [
            "Real-time event processing — use a stream processor or message queue instead",
            "Simple one-off background tasks that can be handled by a message queue consumer",
            "High-throughput event-driven workloads — schedulers are for low-to-medium QPS"
        ],
        keyTradeoffs: [
            "At-least-once execution: tasks may run more than once on failure — make handlers idempotent",
            "Single-leader risk: if the scheduler instance dies, tasks stop. Use distributed schedulers.",
            "Clock skew in distributed systems can cause tasks to fire at unexpected times",
            "Monitoring is critical: silent failures in background tasks go unnoticed without proper alerting"
        ],
        interviewTips: [
            "Mention idempotency for task handlers — it shows you understand distributed system failure modes",
            "Discuss dead-letter queues for tasks that repeatedly fail after retries",
            "Bring up Temporal or AWS Step Functions for complex multi-step workflows with durable state"
        ],
        commonPatterns: [
            {
                name: "Delayed Queue",
                description: "Message becomes visible after a delay — SQS delay queues or Redis ZADD with timestamp scoring"
            },
            {
                name: "Leader Election",
                description: "Only one scheduler instance runs tasks to prevent duplicate execution — use distributed locks"
            },
            {
                name: "Workflow Orchestration",
                description: "Multi-step task chains with compensation logic — Temporal, Cadence, or Step Functions"
            }
        ],
        realWorldExamples: [
            "Airbnb uses Apache Airflow to orchestrate thousands of data pipeline DAGs daily",
            "Uber built Cadence (Temporal is a separate fork by its original creators) for durable, long-running workflow orchestration",
            "Stripe uses custom task scheduling for delayed payment retries and webhook delivery"
        ]
    },
    "stream-processor": {
        componentId: "stream-processor",
        whenToUse: [
            "Real-time analytics: dashboards, metrics aggregation, anomaly detection on live data",
            "Event-driven transformations: enrich, filter, and route events as they arrive",
            "Windowed aggregations: count events per minute, compute moving averages, sessionization",
            "ETL pipelines from operational databases to data warehouses with low latency"
        ],
        whenNotToUse: [
            "Batch processing on historical data that runs once daily — use Spark batch or data warehouse",
            "Simple message routing without transformation — a message queue alone suffices",
            "Low-volume event processing where the operational complexity of a stream framework is overkill"
        ],
        keyTradeoffs: [
            "Exactly-once semantics require checkpointing and idempotent sinks — adds complexity and overhead",
            "Late-arriving data: watermarks and allowed lateness must be configured to handle out-of-order events",
            "State management: stateful stream processing (aggregations, joins) requires fault-tolerant state stores",
            "Operational complexity: Flink/Kafka Streams require expertise to tune parallelism, checkpointing, and backpressure"
        ],
        interviewTips: [
            "Explain windowing concepts: tumbling, sliding, session windows and when to use each",
            "Discuss exactly-once vs at-least-once processing semantics and their performance impact",
            "Mention watermarks for handling late-arriving data — shows deep stream processing knowledge"
        ],
        commonPatterns: [
            {
                name: "Windowed Aggregation",
                description: "Group events into time windows (1 min, 5 min) and compute aggregates like counts and averages"
            },
            {
                name: "Stream-Table Join",
                description: "Enrich streaming events with data from a slowly-changing reference table"
            },
            {
                name: "CDC Streaming",
                description: "Capture database changes as a stream for real-time replication and downstream processing"
            }
        ],
        realWorldExamples: [
            "LinkedIn uses Apache Flink for real-time AI feature computation across millions of members",
            "Netflix processes billions of events per day through Flink for real-time recommendations and monitoring",
            "Uber uses Flink for real-time surge pricing and dynamic ETA calculations"
        ]
    },
    "notification-service": {
        componentId: "notification-service",
        whenToUse: [
            "Multi-channel delivery: push notifications, email, SMS, and in-app messages from a single service",
            "Template management and rendering for consistent messaging across channels",
            "Priority queuing: urgent alerts (security) get delivered before marketing messages",
            "Delivery tracking and analytics — open rates, click rates, bounce handling"
        ],
        whenNotToUse: [
            "Single-channel simple email sending — use SES or SendGrid directly",
            "Real-time chat messaging — use WebSockets instead",
            "System-to-system event communication — use a message queue, not notifications"
        ],
        keyTradeoffs: [
            "Delivery guarantees vary by channel: push can be silent-dropped, email has spam filters, SMS has carrier limits",
            "Rate limiting per user to prevent notification fatigue — too many notifications lead to opt-outs",
            "Template versioning and localization add significant complexity at scale",
            "Cost: SMS is expensive ($0.01-0.05/msg), push is nearly free, email is in between"
        ],
        interviewTips: [
            "Design with a priority queue — separate urgent (2FA codes) from batch (marketing) notifications",
            "Mention idempotency keys to prevent sending duplicate notifications on retries",
            "Discuss user preferences and opt-out management — GDPR/CAN-SPAM compliance matters"
        ],
        commonPatterns: [
            {
                name: "Fan-out per Channel",
                description: "Single notification event fans out to push, email, SMS handlers based on user preferences"
            },
            {
                name: "Priority Queues",
                description: "Separate queues for critical (2FA), transactional (order confirmation), and marketing notifications"
            },
            {
                name: "Batch + Digest",
                description: "Aggregate multiple low-priority notifications into a single daily/weekly digest email"
            }
        ],
        realWorldExamples: [
            "Uber sends millions of trip notifications daily across push, SMS, and email channels",
            "Facebook sends billions of push notifications per day through a custom notification pipeline",
            "Twilio powers SMS and voice notifications for thousands of companies including Airbnb and Stripe"
        ]
    },
    "graph-db": {
        componentId: "graph-db",
        whenToUse: [
            "Highly connected data with complex relationship traversals (social networks, knowledge graphs)",
            "Friend-of-friend, shortest path, or recommendation queries that need multi-hop traversals",
            "Fraud detection: finding suspicious patterns in transaction or identity graphs",
            "Knowledge graphs and ontology management for AI/ML feature stores"
        ],
        whenNotToUse: [
            "Simple CRUD with no complex relationships — SQL or NoSQL is simpler and faster",
            "Aggregation-heavy analytics on tabular data — use a data warehouse",
            "High-write-throughput workloads — graph databases typically optimize for read traversals"
        ],
        keyTradeoffs: [
            "Graph traversals are fast, but global graph analytics (PageRank) can be slow on OLTP graph databases",
            "Data modeling requires thinking in nodes and edges — different from relational modeling",
            "Horizontal scaling is harder than NoSQL: graph partitioning can cause expensive cross-partition traversals",
            "Smaller ecosystem and tooling compared to SQL and NoSQL databases"
        ],
        interviewTips: [
            "Use graph DB when the problem naturally involves relationships — social, fraud, recommendations",
            "Compare multi-hop graph traversals vs SQL JOINs — graph DBs are orders of magnitude faster for 3+ hops",
            "Mention Neo4j Cypher or Apache TinkerPop Gremlin as query languages depending on the graph DB"
        ],
        commonPatterns: [
            {
                name: "Adjacency Traversal",
                description: "Walk the graph from a starting node to find connected entities within N hops"
            },
            {
                name: "Collaborative Filtering",
                description: "Find similar users by traversing shared edges (likes, purchases) for recommendations"
            },
            {
                name: "Subgraph Pattern Matching",
                description: "Find specific patterns in the graph (e.g., circular money transfers for fraud detection)"
            }
        ],
        realWorldExamples: [
            "LinkedIn uses a graph database for their connection graph powering 'People You May Know'",
            "Amazon Neptune powers knowledge graphs and fraud detection for AWS customers",
            "Airbnb uses a graph to model relationships between users, listings, and trust signals"
        ]
    },
    "timeseries-db": {
        componentId: "timeseries-db",
        whenToUse: [
            "Metrics and monitoring data: server CPU, memory, request latency over time",
            "IoT sensor data: temperature, pressure, GPS readings arriving at high frequency",
            "Financial tick data: stock prices, trade volumes with timestamps",
            "Automated downsampling and retention policies for managing storage growth"
        ],
        whenNotToUse: [
            "General-purpose application data with complex relationships — use SQL or NoSQL",
            "Data that does not have a natural time dimension",
            "Workloads requiring complex transactions or JOINs across entity types"
        ],
        keyTradeoffs: [
            "Optimized for append-heavy writes but updates/deletes are expensive or unsupported",
            "Query patterns are time-range-centric — random access by non-time keys is slow",
            "Downsampling reduces storage cost but loses granularity — configure retention tiers carefully",
            "Cardinality explosion: high-cardinality tags (per-user metrics) can degrade performance significantly"
        ],
        interviewTips: [
            "Explain why time-series DBs outperform SQL for metrics: columnar compression, time partitioning, automatic rollups",
            "Mention downsampling strategy: keep 1-second resolution for 24h, 1-minute for 30 days, 1-hour for 1 year",
            "Discuss the cardinality problem and why unbounded tag values are dangerous"
        ],
        commonPatterns: [
            {
                name: "Downsampling Tiers",
                description: "Automatically reduce data resolution over time — raw for recent, aggregated for historical"
            },
            {
                name: "Continuous Aggregation",
                description: "Pre-compute common queries (5-min avg, hourly max) as data arrives for fast dashboard queries"
            },
            {
                name: "Retention Policies",
                description: "Auto-delete data older than a threshold to manage storage costs"
            }
        ],
        realWorldExamples: [
            "Prometheus TSDB powers monitoring at most Kubernetes-based organizations",
            "Uber uses M3DB (their custom time-series DB) for hundreds of millions of metrics per second",
            "Cloudflare uses a time-series database for network edge telemetry across 300+ data centers"
        ]
    },
    "data-warehouse": {
        componentId: "data-warehouse",
        whenToUse: [
            "Analytical queries across terabytes/petabytes of historical data (OLAP workloads)",
            "Business intelligence dashboards, reporting, and ad-hoc SQL analytics",
            "Separating analytics workload from production OLTP databases to prevent impact",
            "Data lake querying with schema-on-read for semi-structured data (Parquet, JSON)"
        ],
        whenNotToUse: [
            "Real-time transactional processing (OLTP) — warehouses have seconds-to-minutes query latency",
            "Low-latency serving for user-facing features — use a cache or operational database",
            "Small datasets under 10 GB where PostgreSQL analytics are fast enough"
        ],
        keyTradeoffs: [
            "Columnar storage = fast aggregations but slow for point lookups and row-level operations",
            "Compute-storage separation (BigQuery, Snowflake) allows independent scaling but incurs network overhead",
            "Cost model: pay-per-query (BigQuery) vs always-on cluster (Redshift) — choose based on query patterns",
            "Data freshness: batch ETL has hours of delay; streaming ingestion adds pipeline complexity"
        ],
        interviewTips: [
            "Explain OLAP vs OLTP and why a separate warehouse protects production databases",
            "Mention columnar storage and why it is efficient for aggregation queries (compression, vectorized execution)",
            "Discuss the modern data stack: ETL/ELT tools (dbt, Fivetran) loading into Snowflake/BigQuery"
        ],
        commonPatterns: [
            {
                name: "Star Schema",
                description: "Central fact table surrounded by dimension tables — optimized for analytical joins"
            },
            {
                name: "ELT Pipeline",
                description: "Load raw data into warehouse first, then transform with SQL (dbt) — modern approach"
            },
            {
                name: "Materialized Views",
                description: "Pre-computed query results refreshed periodically for faster dashboard loading"
            }
        ],
        realWorldExamples: [
            "Spotify uses Google BigQuery for analytics across billions of daily streaming events",
            "Airbnb uses a data warehouse with Apache Hive and Spark for all business analytics",
            "Netflix runs an S3-based data lake queried with Presto/Trino over Apache Iceberg tables to analyze billions of streaming events"
        ]
    },
    "service-discovery": {
        componentId: "service-discovery",
        whenToUse: [
            "Microservices that need to find each other dynamically without hardcoded IPs",
            "Auto-scaling environments where instances come and go frequently",
            "Multi-region deployments requiring region-aware service resolution",
            "Health-checked service registration with automatic deregistration of failed instances"
        ],
        whenNotToUse: [
            "Monolithic applications with a single deployment target",
            "Simple setups behind a load balancer where DNS/LB already provides indirection",
            "Serverless architectures where the platform handles service routing (e.g., API Gateway + Lambda)"
        ],
        keyTradeoffs: [
            "Client-side discovery (Consul, Eureka) gives more control but embeds logic in every service",
            "Server-side discovery (AWS ALB, K8s Services) is simpler but less flexible for routing",
            "Consistency: stale service registry entries cause requests to dead instances",
            "CP vs AP: Consul (CP) may reject reads during partition; Eureka (AP) may return stale data"
        ],
        interviewTips: [
            "Distinguish client-side vs server-side discovery and explain when you would pick each",
            "Mention Kubernetes Services as built-in server-side discovery — kube-dns resolves service names",
            "Discuss health checks and how fast unhealthy instances are removed from the registry"
        ],
        commonPatterns: [
            {
                name: "Client-side Discovery",
                description: "Clients query a registry (Consul, Eureka) and load-balance across returned instances"
            },
            {
                name: "Server-side Discovery",
                description: "Clients hit a load balancer; the LB queries the registry and routes to healthy instances"
            },
            {
                name: "DNS-based Discovery",
                description: "Services register DNS records; consumers resolve service names to IPs via DNS"
            }
        ],
        realWorldExamples: [
            "Netflix built Eureka for client-side service discovery across hundreds of microservices",
            "HashiCorp Consul is used by thousands of companies for service discovery and configuration",
            "Kubernetes kube-dns/CoreDNS provides built-in service discovery for all K8s workloads"
        ]
    },
    "reverse-proxy": {
        componentId: "reverse-proxy",
        whenToUse: [
            "SSL/TLS termination to offload encryption from backend servers",
            "Request routing, URL rewriting, and path-based routing to different backends",
            "Response caching and compression to reduce origin load and bandwidth",
            "Security filtering: block malicious requests, add security headers, hide backend topology"
        ],
        whenNotToUse: [
            "When a managed load balancer already handles SSL termination and routing",
            "Internal service-to-service communication in a service mesh (Envoy sidecars handle this)",
            "Simple single-backend deployments where the added layer provides no benefit"
        ],
        keyTradeoffs: [
            "Single point of failure if not deployed redundantly — always run in HA pairs",
            "Added latency from the extra network hop (usually <1ms for Nginx/Envoy)",
            "Configuration complexity: Nginx/Envoy configs can become large and hard to manage",
            "Feature overlap with load balancers and API gateways — avoid duplicating functionality"
        ],
        interviewTips: [
            "Explain the difference between reverse proxy, load balancer, and API gateway — they overlap but serve different primary purposes",
            "Mention Nginx as the default choice for reverse proxy in most architectures",
            "Discuss TLS termination and why it reduces backend CPU usage significantly"
        ],
        commonPatterns: [
            {
                name: "TLS Termination",
                description: "Decrypt HTTPS at the proxy layer and forward plain HTTP to backends — reduces backend CPU"
            },
            {
                name: "Path-based Routing",
                description: "Route /api to app servers, /static to CDN origin, /ws to WebSocket servers"
            },
            {
                name: "Response Caching",
                description: "Cache responses at the proxy for repeated requests — reduces origin load"
            }
        ],
        realWorldExamples: [
            "Nginx serves as a reverse proxy for over 30% of all websites on the internet",
            "Cloudflare acts as a reverse proxy for millions of websites providing DDoS protection and caching",
            "Envoy Proxy (created by Lyft) is the standard reverse proxy in cloud-native architectures"
        ]
    },
    "distributed-lock": {
        componentId: "distributed-lock",
        whenToUse: [
            "Preventing race conditions in distributed systems (double-spending, overselling inventory)",
            "Leader election: ensuring only one instance runs a singleton task (scheduler, cron)",
            "Coordinating distributed transactions across multiple services",
            "Exclusive access to a shared resource (file, external API with strict rate limits)"
        ],
        whenNotToUse: [
            "Single-server applications where in-process mutexes/semaphores are sufficient",
            "High-throughput hot paths where lock contention would create a bottleneck",
            "Scenarios where optimistic concurrency control (version checks) is simpler and sufficient"
        ],
        keyTradeoffs: [
            "Safety vs liveness: Redlock debates — can a Redis-based lock guarantee mutual exclusion during network partitions?",
            "Lock expiry: too short = premature release during GC pauses; too long = blocking on holder crash",
            "Performance: acquiring a distributed lock adds network round-trips (5-15ms with Redis)",
            "Fencing tokens: without them, an expired lock holder can still write — causing data corruption"
        ],
        interviewTips: [
            "Mention fencing tokens as a guard against expired locks — shows you understand the subtle failure modes",
            "Discuss the Redlock controversy (Martin Kleppmann vs Salvatore Sanfilippo) for bonus depth",
            "Explain ZooKeeper ephemeral nodes as an alternative that auto-releases locks on session disconnect"
        ],
        commonPatterns: [
            {
                name: "Redis SET NX + TTL",
                description: "Acquire lock with SET key value NX EX ttl — simple and widely used for short-duration locks"
            },
            {
                name: "ZooKeeper Ephemeral Nodes",
                description: "Create ephemeral sequential nodes — lock holder has the lowest sequence number, auto-releases on disconnect"
            },
            {
                name: "Fencing Token",
                description: "Each lock acquisition returns a monotonically increasing token; storage rejects writes with stale tokens"
            }
        ],
        realWorldExamples: [
            "Amazon uses distributed locks for inventory management to prevent overselling during flash sales",
            "Google uses Chubby (their distributed lock service) for leader election and GFS master coordination",
            "Stripe uses Redis-based locks to prevent double-charging during payment processing retries"
        ]
    },
    "coordination-service": {
        componentId: "coordination-service",
        whenToUse: [
            "Leader election: guaranteeing exactly one active instance of a scheduler, controller, or primary node",
            "Distributed locks and coordination primitives backed by consensus (ZooKeeper, etcd, Consul)",
            "Cluster membership and failure detection — tracking which nodes are alive and what roles they hold",
            "Strongly consistent storage for small, critical metadata: configuration, partition assignments, schema versions"
        ],
        whenNotToUse: [
            "Small systems with no leader election or coordination needs — a consensus cluster is heavyweight infrastructure to operate",
            "When your existing datastore can provide locking (e.g., Redis SET NX with its weaker guarantees, or Postgres advisory locks)",
            "General-purpose data storage — coordination services are built for small metadata, not application data"
        ],
        keyTradeoffs: [
            "Consensus (ZAB for ZooKeeper, Raft for etcd/Consul) gives strong consistency but requires a quorum — writes stall if the majority is down",
            "Write throughput is limited because every write goes through consensus rounds — keep data small and writes infrequent",
            "Running a consensus cluster (3 or 5 nodes, odd quorum sizes, leader failover) is real operational burden",
            "Ephemeral nodes/leases and watches enable elegant failure detection, but session expiry tuning is tricky (too short = flapping, too long = slow failover)"
        ],
        interviewTips: [
            "Name the consensus algorithm: ZooKeeper uses ZAB while etcd and Consul use Raft — it signals real depth",
            "Mention that Kafka historically depended on ZooKeeper but replaced it with its own Raft-based KRaft mode in Kafka 3.x+",
            "Stress that it is for coordination metadata only — storing application data in ZooKeeper/etcd is a classic anti-pattern"
        ],
        commonPatterns: [
            {
                name: "Leader Election",
                description: "Candidates create ephemeral sequential nodes; the lowest sequence wins; when its session drops, the next candidate takes over"
            },
            {
                name: "Distributed Lock",
                description: "Consensus-backed locks tied to sessions or leases that auto-release when the holder disconnects"
            },
            {
                name: "Watch/Notify",
                description: "Clients watch keys and are notified on change — drives config propagation and membership updates without polling"
            }
        ],
        realWorldExamples: [
            "Kubernetes stores all cluster state in etcd, making it the consensus backbone of every K8s cluster",
            "Kafka relied on ZooKeeper for controller election and metadata for a decade before replacing it with KRaft in Kafka 3.x",
            "HBase and the Hadoop ecosystem use ZooKeeper for master election and cluster coordination"
        ]
    },
    "id-generator": {
        componentId: "id-generator",
        whenToUse: [
            "Any distributed system needing globally unique identifiers without coordination",
            "Database primary keys that must be sortable by creation time (Snowflake, ULID)",
            "URL shorteners, tweet IDs, order IDs, trace IDs in distributed tracing",
            "Sharding keys where sequential IDs cause hot partitions"
        ],
        whenNotToUse: [
            "Single-database systems where auto-increment is sufficient",
            "When IDs don't need to be globally unique (session-local counters)"
        ],
        keyTradeoffs: [
            "Snowflake IDs are sortable but leak creation time; UUIDs are random but unsortable",
            "Centralized ID services are simple but become SPOFs; embedded generators are resilient but need clock sync",
            "64-bit Snowflake IDs are compact but overflow in ~69 years; 128-bit UUIDs never overflow but use more storage",
            "Sequential IDs reveal volume/growth; random IDs prevent enumeration but fragment B-tree indexes"
        ],
        interviewTips: [
            "Always mention Snowflake IDs by name — interviewers expect it for any ID generation discussion",
            "Explain the bit layout: timestamp (41 bits) + machine ID (10 bits) + sequence (12 bits)",
            "Discuss clock skew mitigation — NTP sync, logical clocks, or waiting for clock catch-up"
        ],
        commonPatterns: [
            {
                name: "Twitter Snowflake",
                description: "64-bit IDs: 41-bit timestamp + 10-bit worker + 12-bit sequence; 4096 IDs/ms per worker"
            },
            {
                name: "ULID",
                description: "128-bit: 48-bit timestamp + 80-bit random; lexicographically sortable, URL-safe"
            },
            {
                name: "Database Ticket Server",
                description: "Central DB with auto-increment (Flickr pattern); simple but SPOF without replication"
            }
        ],
        realWorldExamples: [
            "Twitter created Snowflake to generate ~10K unique IDs per second per process for tweet IDs",
            "Instagram uses a PostgreSQL-based ID generator with epoch + shard ID + sequence",
            "Discord uses Snowflake IDs for messages, enabling time-based sorting and sharding"
        ]
    },
    "sharded-counter": {
        componentId: "sharded-counter",
        whenToUse: [
            "High-write counters: like counts, view counts, follower counts at millions of writes/sec",
            "Any counter where a single key would become a hot partition under concurrent writes",
            "Real-time vote tallying, poll results, trending scores",
            "Inventory count decrements during flash sales"
        ],
        whenNotToUse: [
            "Low-volume counters where a single atomic increment is sufficient",
            "When exact real-time accuracy is required (sharded reads are eventually consistent)"
        ],
        keyTradeoffs: [
            "More shards = higher write throughput but slower reads (must aggregate across all shards)",
            "Trade-off between read latency and write scalability — tune shard count per counter",
            "Background reconciliation adds complexity but enables approximate real-time reads",
            "Negative counts possible during race conditions — need floor checks or two-phase counting"
        ],
        interviewTips: [
            "Mention this pattern whenever designing social media (likes, views, shares) at scale",
            "Explain the read path: SUM across N shards, optionally cached for fast approximate reads",
            "Discuss how YouTube counts views: sharded writes + periodic batch aggregation"
        ],
        commonPatterns: [
            {
                name: "Redis Sharded Counter",
                description: "N Redis keys per logical counter; INCR random shard on write, MGET all shards on read"
            },
            {
                name: "Database Counter Table",
                description: "N rows per counter; random row on write, SUM on read with caching"
            },
            {
                name: "Approximate Counter",
                description: "Probabilistic counting (HyperLogLog) for unique counts; Count-Min Sketch for frequency"
            }
        ],
        realWorldExamples: [
            "YouTube uses sharded counters for video view counts, aggregating periodically for display",
            "Instagram shards like counts across multiple Redis keys to handle viral post spikes",
            "Twitter uses distributed counters for tweet impression and engagement metrics"
        ]
    },
    "pub-sub": {
        componentId: "pub-sub",
        whenToUse: [
            "Event-driven fan-out: one event triggers multiple independent consumers (analytics, notifications, cache invalidation)",
            "Decoupling services that don't need to know about each other",
            "Change Data Capture (CDC) — broadcasting database changes to downstream systems",
            "Real-time feed updates, live dashboards, IoT event distribution"
        ],
        whenNotToUse: [
            "Point-to-point task distribution (use a message queue with competing consumers instead)",
            "When message ordering across topics is critical (pub/sub topics are independently ordered)"
        ],
        keyTradeoffs: [
            "Fan-out amplifies traffic: 1 publish to N subscribers = N message deliveries",
            "At-least-once delivery is standard; exactly-once requires idempotent subscribers",
            "Topic-based routing is simple but inflexible; content-based routing adds complexity",
            "Push (server pushes to subscribers) vs pull (subscribers poll) affects latency and resource usage"
        ],
        interviewTips: [
            "Clearly distinguish pub/sub (fan-out, all subscribers get every message) from queues (competing consumers, each message processed once)",
            "Mention it whenever you have multiple downstream systems reacting to the same event",
            "Discuss dead letter topics for failed message processing"
        ],
        commonPatterns: [
            {
                name: "Topic Fan-out",
                description: "Publish to a topic; all subscriptions receive a copy. AWS SNS -> multiple SQS queues"
            },
            {
                name: "Event Bus",
                description: "Central pub/sub for all domain events; subscribers filter by event type"
            },
            {
                name: "CDC Stream",
                description: "Database changes published as events; consumers build materialized views"
            }
        ],
        realWorldExamples: [
            "Google Cloud Pub/Sub handles trillions of messages per month across Google's infrastructure",
            "Netflix uses Apache Kafka topics for real-time event streaming across 1000+ microservices",
            "Slack uses a pub/sub system to fan out messages to all connected clients in a channel"
        ]
    },
    "vector-db": {
        componentId: "vector-db",
        whenToUse: [
            "Semantic/similarity search: find items similar to a query by meaning, not keywords",
            "Recommendation engines: suggest content based on embedding similarity",
            "RAG (Retrieval Augmented Generation) for LLM applications",
            "Image search, audio fingerprinting, fraud detection via behavioral similarity"
        ],
        whenNotToUse: [
            "Exact-match lookups (use a key-value store or traditional index instead)",
            "Small datasets where brute-force search is fast enough",
            "When you need ACID transactions or complex relational queries"
        ],
        keyTradeoffs: [
            "ANN (approximate) search is fast but not exact — recall vs latency trade-off",
            "HNSW indexing gives low latency but uses significant memory; IVF uses less memory but higher latency",
            "Embedding dimension affects storage and query cost: 768-dim vs 1536-dim is 2x difference",
            "Index build time can be hours for large datasets; incremental updates are challenging"
        ],
        interviewTips: [
            "Mention vector databases when designing recommendation or search systems — it shows awareness of modern ML infrastructure",
            "Explain the pipeline: raw data -> embedding model -> vector DB -> ANN query -> ranked results",
            "Discuss hybrid search: combine vector similarity with keyword filters for better relevance"
        ],
        commonPatterns: [
            {
                name: "Embedding + ANN",
                description: "Convert items to vectors via ML model; index in vector DB; query with cosine/dot-product similarity"
            },
            {
                name: "Hybrid Search",
                description: "Combine dense vector similarity with sparse keyword matching (BM25) for best relevance"
            },
            {
                name: "RAG Pipeline",
                description: "Chunk documents -> embed -> store in vector DB -> retrieve context for LLM prompt"
            }
        ],
        realWorldExamples: [
            "Spotify uses embeddings for podcast and music recommendations via approximate nearest-neighbor search",
            "Pinterest uses vector search for visual similarity in their 'More like this' feature",
            "Discord uses pgvector to add vector similarity search on top of its existing PostgreSQL infrastructure for semantic search"
        ]
    },
    "geospatial-index": {
        componentId: "geospatial-index",
        whenToUse: [
            "Proximity search: find nearby drivers, restaurants, businesses within a radius",
            "Geo-fenced operations: determine which zone/region a point belongs to",
            "Route optimization and ETA estimation with location data",
            "Real-time location tracking with spatial queries"
        ],
        whenNotToUse: [
            "Non-geographic data that happens to have coordinates (use a regular index)",
            "When exact geometric calculations aren't needed (approximate distance formulas suffice)"
        ],
        keyTradeoffs: [
            "Geohash is simple and works with any sorted index but has edge-case issues at cell boundaries",
            "Quadtree adapts to data density but requires custom implementation",
            "H3 (Uber's hex grid) provides uniform area cells but adds a library dependency",
            "PostGIS is powerful but ties you to PostgreSQL; Redis GEO is simpler but less feature-rich"
        ],
        interviewTips: [
            "Always mention geohash or quadtree when designing Uber, Yelp, or any location-based system",
            "Explain the precision trade-off: shorter geohash = larger cell = faster but less precise",
            "Discuss how to handle boundary issues: query neighboring cells to avoid missing nearby results"
        ],
        commonPatterns: [
            {
                name: "Geohash Grid",
                description: "Encode lat/lng into a string prefix; nearby points share prefixes; query by prefix range"
            },
            {
                name: "Quadtree",
                description: "Recursively subdivide space into 4 quadrants; leaf nodes contain points; adapts to data density"
            },
            {
                name: "H3 Hexagonal Grid",
                description: "Uber's hierarchical hex grid; uniform-area cells; 16 resolution levels from continent to sub-meter"
            }
        ],
        realWorldExamples: [
            "Uber uses H3 hexagonal indexing for surge pricing zones and driver-rider matching",
            "Yelp uses Elasticsearch geo_point queries for 'restaurants near me' with distance sorting",
            "DoorDash uses geospatial indexing to match orders with nearby delivery drivers in real time"
        ]
    },
    "config-service": {
        componentId: "config-service",
        whenToUse: [
            "Feature flags: toggle features on/off without redeployment",
            "A/B testing: route percentages of traffic to different code paths",
            "Gradual rollouts: canary new features to 1% -> 10% -> 50% -> 100% of users",
            "Runtime tuning: adjust rate limits, cache TTLs, algorithm parameters without restarts"
        ],
        whenNotToUse: [
            "Static configuration that changes only at deploy time (use environment variables)",
            "Secrets management (use a dedicated vault like HashiCorp Vault or AWS Secrets Manager)"
        ],
        keyTradeoffs: [
            "Push (server pushes config changes) vs pull (clients poll periodically) — push is faster but needs persistent connections",
            "Strong consistency (all nodes see same config) vs eventual consistency (faster propagation)",
            "Centralized config service is a potential SPOF — need local caching with fallback",
            "Feature flag complexity grows quickly — need cleanup processes for stale flags"
        ],
        interviewTips: [
            "Mention feature flags when discussing deployment strategies — shows operational maturity",
            "Explain how gradual rollouts reduce blast radius of bugs",
            "Discuss config propagation latency — stale config can cause inconsistent behavior across nodes"
        ],
        commonPatterns: [
            {
                name: "Feature Flag",
                description: "Boolean or multivariate flag checked at runtime; enables trunk-based development and dark launches"
            },
            {
                name: "Percentage Rollout",
                description: "Hash user ID to determine if they're in the rollout percentage; deterministic per user"
            },
            {
                name: "Config Hierarchy",
                description: "Default -> environment -> service -> instance overrides; most specific wins"
            }
        ],
        realWorldExamples: [
            "Netflix uses their internal config service to manage thousands of feature flags across 1000+ microservices",
            "Facebook evaluates millions of feature flag checks per second using their Gatekeeper system",
            "LaunchDarkly processes 30+ trillion feature flag evaluations per month for enterprise customers"
        ]
    }
};
function getConceptByComponentId(componentId) {
    return CONCEPT_LIBRARY[componentId];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/data/learningPath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEARNING_PATH",
    ()=>LEARNING_PATH,
    "PROBLEM_CONCEPTS",
    ()=>PROBLEM_CONCEPTS
]);
const LEARNING_PATH = [
    {
        name: "Foundations",
        description: "Master the basic building blocks",
        problemIds: [
            "url-shortener",
            "rate-limiter",
            "parking-lot"
        ]
    },
    {
        name: "Intermediate",
        description: "Combine multiple systems",
        problemIds: [
            "notification-system",
            "typeahead-autocomplete",
            "distributed-cache",
            "instagram",
            "music-streaming",
            "reddit",
            "location-service",
            "tinder"
        ]
    },
    {
        name: "Advanced",
        description: "Complex distributed systems",
        problemIds: [
            "twitter-feed",
            "chat-system",
            "web-crawler",
            "file-storage",
            "ecommerce",
            "airbnb",
            "whatsapp",
            "food-delivery",
            "code-editor",
            "cicd-pipeline"
        ]
    },
    {
        name: "Expert",
        description: "Multi-concern architectures",
        problemIds: [
            "ride-sharing",
            "video-streaming",
            "payment-system",
            "ticket-booking",
            "collaborative-editor",
            "team-messaging",
            "metrics-monitoring",
            "netflix",
            "google-maps",
            "zoom",
            "search-engine",
            "tiktok",
            "message-queue-design",
            "digital-wallet"
        ]
    }
];
const PROBLEM_CONCEPTS = [
    {
        problemId: "url-shortener",
        concepts: [
            "caching",
            "hashing",
            "read-heavy-design"
        ],
        prerequisites: []
    },
    {
        problemId: "rate-limiter",
        concepts: [
            "rate-limiting",
            "sliding-window",
            "token-bucket"
        ],
        prerequisites: []
    },
    {
        problemId: "parking-lot",
        concepts: [
            "object-modeling",
            "state-management",
            "concurrency"
        ],
        prerequisites: []
    },
    {
        problemId: "notification-system",
        concepts: [
            "async-processing",
            "message-queue",
            "priority-queue"
        ],
        prerequisites: [
            "rate-limiting"
        ]
    },
    {
        problemId: "typeahead-autocomplete",
        concepts: [
            "trie",
            "prefix-search",
            "ranking"
        ],
        prerequisites: [
            "caching",
            "read-heavy-design"
        ]
    },
    {
        problemId: "distributed-cache",
        concepts: [
            "consistent-hashing",
            "cache-eviction",
            "replication"
        ],
        prerequisites: [
            "caching",
            "hashing"
        ]
    },
    {
        problemId: "instagram",
        concepts: [
            "media-storage",
            "feed-generation",
            "cdn"
        ],
        prerequisites: [
            "caching",
            "async-processing"
        ]
    },
    {
        problemId: "music-streaming",
        concepts: [
            "streaming-protocol",
            "content-delivery",
            "recommendation"
        ],
        prerequisites: [
            "caching",
            "cdn"
        ]
    },
    {
        problemId: "reddit",
        concepts: [
            "ranking-algorithms",
            "comment-trees",
            "vote-counting"
        ],
        prerequisites: [
            "caching",
            "ranking",
            "async-processing"
        ]
    },
    {
        problemId: "location-service",
        concepts: [
            "geospatial-indexing",
            "quadtree",
            "proximity-search"
        ],
        prerequisites: [
            "caching",
            "read-heavy-design"
        ]
    },
    {
        problemId: "tinder",
        concepts: [
            "match-detection",
            "elo-scoring",
            "bloom-filter"
        ],
        prerequisites: [
            "geospatial-indexing",
            "caching",
            "async-processing"
        ]
    },
    {
        problemId: "twitter-feed",
        concepts: [
            "fan-out",
            "timeline",
            "hybrid-approach"
        ],
        prerequisites: [
            "caching",
            "async-processing",
            "feed-generation"
        ]
    },
    {
        problemId: "chat-system",
        concepts: [
            "websocket",
            "presence",
            "message-ordering"
        ],
        prerequisites: [
            "async-processing",
            "message-queue"
        ]
    },
    {
        problemId: "web-crawler",
        concepts: [
            "crawling",
            "url-frontier",
            "politeness"
        ],
        prerequisites: [
            "hashing",
            "async-processing",
            "rate-limiting"
        ]
    },
    {
        problemId: "file-storage",
        concepts: [
            "chunking",
            "deduplication",
            "metadata-db"
        ],
        prerequisites: [
            "consistent-hashing",
            "replication"
        ]
    },
    {
        problemId: "ecommerce",
        concepts: [
            "inventory-management",
            "search-indexing",
            "payment-flow"
        ],
        prerequisites: [
            "caching",
            "async-processing",
            "message-queue"
        ]
    },
    {
        problemId: "airbnb",
        concepts: [
            "availability-calendar",
            "reservation-holds",
            "faceted-search"
        ],
        prerequisites: [
            "search-indexing",
            "geospatial-indexing",
            "concurrency",
            "caching"
        ]
    },
    {
        problemId: "whatsapp",
        concepts: [
            "e2e-encryption",
            "store-and-forward",
            "delivery-receipts"
        ],
        prerequisites: [
            "websocket",
            "message-ordering",
            "message-queue"
        ]
    },
    {
        problemId: "food-delivery",
        concepts: [
            "dispatch-matching",
            "eta-prediction",
            "order-state-machine",
            "stream-processing"
        ],
        prerequisites: [
            "geospatial-indexing",
            "message-queue",
            "state-management"
        ]
    },
    {
        problemId: "code-editor",
        concepts: [
            "sandboxed-execution",
            "container-isolation",
            "lsp"
        ],
        prerequisites: [
            "websocket",
            "async-processing",
            "concurrency"
        ]
    },
    {
        problemId: "cicd-pipeline",
        concepts: [
            "dag-scheduling",
            "artifact-storage",
            "deployment-strategies"
        ],
        prerequisites: [
            "message-queue",
            "async-processing",
            "state-management"
        ]
    },
    {
        problemId: "ride-sharing",
        concepts: [
            "matching-algorithm",
            "real-time-tracking",
            "surge-pricing"
        ],
        prerequisites: [
            "websocket",
            "geospatial-indexing",
            "consistent-hashing"
        ]
    },
    {
        problemId: "video-streaming",
        concepts: [
            "adaptive-bitrate",
            "transcoding",
            "edge-caching"
        ],
        prerequisites: [
            "cdn",
            "streaming-protocol",
            "async-processing"
        ]
    },
    {
        problemId: "payment-system",
        concepts: [
            "idempotency",
            "saga-pattern",
            "ledger"
        ],
        prerequisites: [
            "async-processing",
            "message-queue",
            "state-management"
        ]
    },
    {
        problemId: "ticket-booking",
        concepts: [
            "distributed-locking",
            "seat-reservation",
            "optimistic-concurrency"
        ],
        prerequisites: [
            "concurrency",
            "caching",
            "async-processing"
        ]
    },
    {
        problemId: "collaborative-editor",
        concepts: [
            "crdt",
            "operational-transform",
            "conflict-resolution"
        ],
        prerequisites: [
            "websocket",
            "message-ordering",
            "replication"
        ]
    },
    {
        problemId: "team-messaging",
        concepts: [
            "channel-model",
            "search",
            "notification-routing"
        ],
        prerequisites: [
            "websocket",
            "message-queue",
            "async-processing"
        ]
    },
    {
        problemId: "metrics-monitoring",
        concepts: [
            "time-series-db",
            "aggregation-pipeline",
            "alerting"
        ],
        prerequisites: [
            "stream-processing",
            "async-processing",
            "message-queue"
        ]
    },
    {
        problemId: "netflix",
        concepts: [
            "open-connect-cdn",
            "abr-ladder",
            "precomputed-recommendations"
        ],
        prerequisites: [
            "cdn",
            "adaptive-bitrate",
            "edge-caching",
            "recommendation"
        ]
    },
    {
        problemId: "google-maps",
        concepts: [
            "tile-pyramid",
            "shortest-path-routing",
            "traffic-ingestion"
        ],
        prerequisites: [
            "geospatial-indexing",
            "cdn",
            "stream-processing",
            "caching"
        ]
    },
    {
        problemId: "zoom",
        concepts: [
            "webrtc",
            "sfu-architecture",
            "simulcast"
        ],
        prerequisites: [
            "websocket",
            "streaming-protocol",
            "async-processing"
        ]
    },
    {
        problemId: "search-engine",
        concepts: [
            "inverted-index",
            "pagerank",
            "scatter-gather"
        ],
        prerequisites: [
            "crawling",
            "url-frontier",
            "ranking",
            "search-indexing"
        ]
    },
    {
        problemId: "tiktok",
        concepts: [
            "two-tower-model",
            "candidate-generation",
            "cold-start"
        ],
        prerequisites: [
            "recommendation",
            "feed-generation",
            "stream-processing",
            "cdn"
        ]
    },
    {
        problemId: "message-queue-design",
        concepts: [
            "partitioned-log",
            "consumer-groups",
            "isr-replication"
        ],
        prerequisites: [
            "message-queue",
            "replication",
            "consistent-hashing"
        ]
    },
    {
        problemId: "digital-wallet",
        concepts: [
            "double-entry-ledger",
            "exactly-once-execution",
            "reconciliation"
        ],
        prerequisites: [
            "idempotency",
            "saga-pattern",
            "ledger",
            "distributed-locking"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/data/tradeoffCards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRADEOFF_CARDS",
    ()=>TRADEOFF_CARDS
]);
const TRADEOFF_CARDS = [
    {
        id: "sql-vs-nosql",
        title: "SQL vs NoSQL",
        optionA: {
            name: "SQL (Relational)",
            pros: [
                "ACID transactions",
                "Strong consistency",
                "Complex joins and queries",
                "Well-understood schema enforcement"
            ],
            cons: [
                "Harder to scale horizontally",
                "Rigid schema — migrations can be painful",
                "Lower write throughput at extreme scale"
            ]
        },
        optionB: {
            name: "NoSQL (Document/Key-Value)",
            pros: [
                "Horizontal scaling built-in",
                "Flexible schema",
                "High write throughput",
                "Low-latency key-value lookups"
            ],
            cons: [
                "Limited join support",
                "Eventual consistency by default",
                "Data modeling requires denormalization"
            ]
        },
        whenToChooseA: "When you need complex queries, transactions, or strong consistency (payments, inventory, user accounts).",
        whenToChooseB: "When you need massive scale, flexible schema, or high write throughput (social feeds, IoT data, session stores)."
    },
    {
        id: "push-vs-pull",
        title: "Push vs Pull (Fan-out)",
        optionA: {
            name: "Fan-out on Write (Push)",
            pros: [
                "Fast reads — timeline is pre-computed",
                "Simple read path",
                "Consistent user experience"
            ],
            cons: [
                "High write amplification for popular users",
                "Wasted work if followers never read",
                "Slow writes for celebrity accounts"
            ]
        },
        optionB: {
            name: "Fan-out on Read (Pull)",
            pros: [
                "No write amplification",
                "Always fresh data",
                "Simple write path"
            ],
            cons: [
                "Slow reads — must aggregate at read time",
                "Higher read latency",
                "Complex read path with many DB queries"
            ]
        },
        whenToChooseA: "For most users with moderate follower counts where read latency matters most.",
        whenToChooseB: "For celebrity/high-follower accounts, or when write simplicity is more important than read speed."
    },
    {
        id: "sync-vs-async",
        title: "Sync vs Async Communication",
        optionA: {
            name: "Synchronous (Request-Response)",
            pros: [
                "Simple to reason about",
                "Immediate feedback",
                "Easy error handling",
                "Natural request-response pattern"
            ],
            cons: [
                "Tight coupling between services",
                "Cascading failures",
                "Caller blocks until response"
            ]
        },
        optionB: {
            name: "Asynchronous (Message Queue)",
            pros: [
                "Loose coupling",
                "Better fault tolerance",
                "Natural load leveling",
                "Retry and dead-letter support"
            ],
            cons: [
                "Harder to debug",
                "Eventual consistency",
                "Message ordering challenges",
                "Additional infrastructure (broker)"
            ]
        },
        whenToChooseA: "When you need immediate responses and simple request-response flows (API gateway to service, user-facing reads).",
        whenToChooseB: "For fire-and-forget tasks, cross-service events, or when you need to decouple producers from consumers (notifications, analytics, order processing)."
    },
    {
        id: "strong-vs-eventual",
        title: "Strong vs Eventual Consistency",
        optionA: {
            name: "Strong Consistency",
            pros: [
                "All reads see the latest write",
                "Simplifies application logic",
                "No stale data surprises"
            ],
            cons: [
                "Higher latency (coordination overhead)",
                "Lower availability during partitions",
                "Harder to scale geographically"
            ]
        },
        optionB: {
            name: "Eventual Consistency",
            pros: [
                "Higher availability",
                "Lower latency",
                "Better geographic distribution",
                "Higher throughput"
            ],
            cons: [
                "Stale reads possible",
                "Complex conflict resolution",
                "Application must handle inconsistency"
            ]
        },
        whenToChooseA: "For financial transactions, inventory counts, or anywhere correctness is non-negotiable.",
        whenToChooseB: "For social feeds, analytics, caches, or anywhere slight staleness is acceptable for better performance."
    },
    {
        id: "monolith-vs-microservices",
        title: "Monolith vs Microservices",
        optionA: {
            name: "Monolith",
            pros: [
                "Simple deployment",
                "Easy local development",
                "No network overhead between modules",
                "Straightforward debugging"
            ],
            cons: [
                "Harder to scale individual components",
                "Longer build/deploy cycles at scale",
                "Technology lock-in",
                "Team coupling"
            ]
        },
        optionB: {
            name: "Microservices",
            pros: [
                "Independent scaling per service",
                "Independent deployments",
                "Technology flexibility per service",
                "Team autonomy"
            ],
            cons: [
                "Distributed system complexity",
                "Network latency between services",
                "Operational overhead (monitoring, tracing)",
                "Data consistency challenges"
            ]
        },
        whenToChooseA: "For early-stage products, small teams, or when the domain is not yet well understood.",
        whenToChooseB: "For large organizations with clear domain boundaries, independent scaling needs, and dedicated platform teams."
    },
    {
        id: "rest-vs-grpc",
        title: "REST vs gRPC",
        optionA: {
            name: "REST (HTTP/JSON)",
            pros: [
                "Universal browser support",
                "Human-readable payloads",
                "Simple tooling (curl, Postman)",
                "Wide ecosystem"
            ],
            cons: [
                "Larger payload size (JSON)",
                "No built-in streaming",
                "No strict schema enforcement",
                "HTTP/1.1 overhead"
            ]
        },
        optionB: {
            name: "gRPC (Protocol Buffers)",
            pros: [
                "Binary protocol — smaller payloads",
                "Built-in bi-directional streaming",
                "Strong schema via .proto files",
                "HTTP/2 multiplexing"
            ],
            cons: [
                "No native browser support (needs proxy)",
                "Binary payloads harder to debug",
                "Steeper learning curve",
                "Code generation required"
            ]
        },
        whenToChooseA: "For public APIs, browser clients, or when developer experience and debuggability matter most.",
        whenToChooseB: "For internal service-to-service communication where performance, streaming, and strict contracts matter."
    },
    {
        id: "cache-aside-vs-write-through",
        title: "Cache-aside vs Write-through",
        optionA: {
            name: "Cache-aside (Lazy Loading)",
            pros: [
                "Only caches data that is actually read",
                "Cache failure does not block writes",
                "Simple implementation"
            ],
            cons: [
                "Cache miss penalty (extra DB read)",
                "Stale data until TTL expires",
                "Cold start problem"
            ]
        },
        optionB: {
            name: "Write-through",
            pros: [
                "Cache is always up-to-date",
                "No stale data",
                "Consistent read performance"
            ],
            cons: [
                "Write latency increases (write to cache + DB)",
                "Caches data that may never be read",
                "More complex write path"
            ]
        },
        whenToChooseA: "For read-heavy workloads where some staleness is acceptable and you want to minimize cache size.",
        whenToChooseB: "When data freshness is critical and the write volume is manageable."
    },
    {
        id: "vertical-vs-horizontal",
        title: "Vertical vs Horizontal Scaling",
        optionA: {
            name: "Vertical Scaling (Scale Up)",
            pros: [
                "No code changes needed",
                "No distributed system complexity",
                "Simple data consistency",
                "Lower operational overhead"
            ],
            cons: [
                "Hardware limits (single machine ceiling)",
                "Single point of failure",
                "Expensive at high end",
                "Downtime during upgrades"
            ]
        },
        optionB: {
            name: "Horizontal Scaling (Scale Out)",
            pros: [
                "Virtually unlimited capacity",
                "Better fault tolerance",
                "Cost-effective with commodity hardware",
                "Zero-downtime scaling"
            ],
            cons: [
                "Distributed system complexity",
                "Data partitioning challenges",
                "Network overhead",
                "Consistency challenges"
            ]
        },
        whenToChooseA: "For early-stage systems, databases that are hard to shard, or when simplicity outweighs scale needs.",
        whenToChooseB: "When you need fault tolerance, unlimited growth, or when individual machines cannot handle the load."
    },
    {
        id: "polling-vs-websocket",
        title: "Polling vs WebSocket",
        optionA: {
            name: "Polling (Short/Long)",
            pros: [
                "Simple to implement",
                "Works through all proxies/firewalls",
                "Stateless — easy to load balance",
                "HTTP caching friendly"
            ],
            cons: [
                "Wasted requests when no new data",
                "Higher latency (polling interval)",
                "More server load at scale"
            ]
        },
        optionB: {
            name: "WebSocket",
            pros: [
                "Real-time bidirectional communication",
                "Low latency",
                "Efficient — no repeated handshakes",
                "Server can push updates instantly"
            ],
            cons: [
                "Stateful connections — harder to load balance",
                "Connection management overhead",
                "Proxy/firewall compatibility issues",
                "Reconnection logic needed"
            ]
        },
        whenToChooseA: "For infrequent updates, simple dashboards, or when infrastructure does not support persistent connections.",
        whenToChooseB: "For chat, live feeds, collaborative editing, gaming, or any feature needing sub-second updates."
    },
    {
        id: "single-vs-multi-leader",
        title: "Single Leader vs Multi-Leader Replication",
        optionA: {
            name: "Single Leader",
            pros: [
                "No write conflicts",
                "Simple consistency model",
                "Easy to reason about ordering"
            ],
            cons: [
                "Single point of failure for writes",
                "Write latency for remote clients",
                "Leader failover complexity"
            ]
        },
        optionB: {
            name: "Multi-Leader",
            pros: [
                "Writes accepted at any datacenter",
                "Better write latency for geo-distributed users",
                "Tolerates datacenter outages"
            ],
            cons: [
                "Write conflicts must be resolved",
                "Complex conflict resolution logic",
                "Harder to maintain consistency"
            ]
        },
        whenToChooseA: "When strong consistency is required and most users are in one region.",
        whenToChooseB: "For geo-distributed systems where write latency matters and you can handle conflict resolution (collaborative docs, multi-region apps)."
    },
    {
        id: "hash-vs-range-partitioning",
        title: "Hash Partitioning vs Range Partitioning",
        optionA: {
            name: "Hash Partitioning",
            pros: [
                "Even data distribution",
                "No hotspots from sequential keys",
                "Simple partition assignment"
            ],
            cons: [
                "Range queries require scatter-gather",
                "Rebalancing on cluster resize",
                "Loses data locality"
            ]
        },
        optionB: {
            name: "Range Partitioning",
            pros: [
                "Efficient range queries",
                "Data locality for related keys",
                "Natural ordering preserved"
            ],
            cons: [
                "Hotspots from sequential writes",
                "Uneven partition sizes",
                "Requires careful split-point selection"
            ]
        },
        whenToChooseA: "For key-value lookups where even distribution matters (user IDs, session tokens, URL shortener).",
        whenToChooseB: "When range scans are common (time-series data, alphabetical listings, log analysis)."
    },
    {
        id: "cdn-push-vs-pull",
        title: "CDN Push vs CDN Pull",
        optionA: {
            name: "CDN Push (Origin Push)",
            pros: [
                "Content available immediately",
                "No first-request latency penalty",
                "Full control over what is cached"
            ],
            cons: [
                "Storage costs for all pushed content",
                "Must manage cache invalidation",
                "Wasted space for unpopular content"
            ]
        },
        optionB: {
            name: "CDN Pull (Origin Pull)",
            pros: [
                "Only popular content is cached",
                "Lower storage costs",
                "Automatic cache population"
            ],
            cons: [
                "First request is slow (cache miss)",
                "Thundering herd on cache expiry",
                "Less control over cached content"
            ]
        },
        whenToChooseA: "For critical content that must always be fast (homepage assets, popular videos, app bundles).",
        whenToChooseB: "For long-tail content where most items are rarely accessed (user profile images, old blog posts)."
    },
    {
        id: "token-bucket-vs-sliding-window",
        title: "Rate Limiting: Token Bucket vs Sliding Window",
        optionA: {
            name: "Token Bucket",
            pros: [
                "Allows controlled bursts",
                "Simple to implement",
                "Memory efficient (few counters)",
                "Smooth rate limiting"
            ],
            cons: [
                "Burst traffic can spike",
                "Tuning bucket size and refill rate",
                "Less precise at boundaries"
            ]
        },
        optionB: {
            name: "Sliding Window Log/Counter",
            pros: [
                "Precise rate limiting",
                "No boundary spikes",
                "Accurate per-window counting"
            ],
            cons: [
                "Higher memory usage (log of timestamps)",
                "More complex implementation",
                "Sliding window counter trades precision for memory"
            ]
        },
        whenToChooseA: "When you want to allow short bursts while enforcing average rate (API gateways, general rate limiting).",
        whenToChooseB: "When strict per-window accuracy matters and you cannot tolerate boundary bursts (financial APIs, security-sensitive endpoints)."
    },
    {
        id: "at-least-once-vs-exactly-once",
        title: "Exactly-once Processing (EOS)",
        optionA: {
            name: "At-least-once Delivery + Idempotent Consumers",
            pros: [
                "Honest about network reality — retries on uncertainty",
                "No message loss",
                "High throughput, low coordination overhead",
                "Works on any broker"
            ],
            cons: [
                "Duplicate deliveries are guaranteed to happen eventually",
                "Every consumer must dedupe or be idempotent",
                "Dedup state (keys, TTLs) is your problem"
            ]
        },
        optionB: {
            name: "Exactly-once Processing (Kafka-style EOS)",
            pros: [
                "Idempotent producers — broker dedupes retries via sequence numbers",
                "Transactions make consume-transform-produce atomic across partitions",
                "Effectively-once results without app-level dedup inside the pipeline"
            ],
            cons: [
                "It is NOT exactly-once delivery — that is impossible over an unreliable network (Two Generals problem)",
                "Underneath it is still at-least-once delivery plus deduplication",
                "Guarantee ends at the pipeline edge — external side effects (emails, API calls) still need idempotency or transactional offsets",
                "Transaction coordination adds latency and complexity"
            ]
        },
        whenToChooseA: "For most messaging — accept duplicates and design idempotent consumers (notifications, analytics events, log processing).",
        whenToChooseB: "For stream pipelines where duplicated results corrupt state (payments ledgers, counters, Kafka Streams apps) — knowing it dedupes processing, not delivery."
    },
    {
        id: "optimistic-vs-pessimistic-locking",
        title: "Optimistic vs Pessimistic Locking",
        optionA: {
            name: "Optimistic Locking (Version Check at Write)",
            pros: [
                "No locks held — readers never block",
                "Great throughput under low contention",
                "No deadlocks or lock management",
                "Maps naturally to compare-and-swap / row versioning"
            ],
            cons: [
                "Conflicts detected only at write time",
                "Failed writes must retry — wasted work",
                "Retry storms under high contention"
            ]
        },
        optionB: {
            name: "Pessimistic Locking (Lock Before Read)",
            pros: [
                "Conflicts prevented up front — no retries",
                "Predictable behavior under heavy contention",
                "Simple application logic (no retry loops)"
            ],
            cons: [
                "Locks block other transactions — lower concurrency",
                "Deadlock risk requires detection/timeouts",
                "Lock held too long stalls everyone (e.g., SELECT FOR UPDATE across a slow operation)"
            ]
        },
        whenToChooseA: "When conflicts are rare and throughput matters — version columns or CAS on user profiles, documents, low-contention rows.",
        whenToChooseB: "When many writers fight over the same rows and retries would storm (ticket/seat booking, inventory decrement on a hot SKU)."
    },
    {
        id: "sse-vs-websocket",
        title: "SSE vs WebSocket",
        optionA: {
            name: "Server-Sent Events (SSE)",
            pros: [
                "Plain HTTP — works with existing proxies, LBs, and HTTP/2 multiplexing",
                "Built-in auto-reconnect with last-event-ID",
                "Simple server and client code",
                "Much cheaper than long-polling (no re-request per message)"
            ],
            cons: [
                "One-way only — server to client",
                "Text-only (UTF-8) — binary must be encoded",
                "Client-to-server messages need separate HTTP requests"
            ]
        },
        optionB: {
            name: "WebSocket",
            pros: [
                "Full-duplex — both sides push anytime",
                "Binary frame support",
                "Lowest per-message overhead once connected"
            ],
            cons: [
                "Stateful connections — sticky routing or connection registries needed",
                "Trickier through proxies/LBs (protocol upgrade)",
                "You own reconnection, heartbeats, and backpressure logic"
            ]
        },
        whenToChooseA: "For one-way streams — notifications, live feeds, progress updates, LLM token streaming. (Long-polling remains the lowest-common-denominator fallback: an HTTP request held open per message — simple, works everywhere, highest overhead.)",
        whenToChooseB: "For bidirectional, low-latency interaction — chat, multiplayer games, collaborative editing."
    },
    {
        id: "kafka-vs-rabbitmq",
        title: "Kafka Log vs RabbitMQ Broker",
        optionA: {
            name: "Kafka (Distributed Log)",
            pros: [
                "Messages retained and re-readable — consumers track their own offsets",
                "Replay from any offset for reprocessing or new consumers",
                "Ordered within a partition",
                "Massive throughput via sequential disk I/O and batching"
            ],
            cons: [
                "No per-message ack/delete — a slow message blocks its partition",
                "Routing is just topics + partitions; no broker-side filtering",
                "Heavier operational footprint (partitions, consumer groups, rebalances)"
            ]
        },
        optionB: {
            name: "RabbitMQ (Smart Broker Queue)",
            pros: [
                "Per-message ack, requeue, and delete semantics",
                "Flexible routing via exchanges (topic, fanout, headers)",
                "Priority queues, per-message TTL, dead-letter exchanges built in"
            ],
            cons: [
                "Messages deleted on ack — no replay for new consumers",
                "Lower throughput than a log at high volume",
                "Deep queues degrade broker performance"
            ]
        },
        whenToChooseA: "For event streaming, analytics pipelines, event sourcing, or when multiple independent consumers need the same data with replay.",
        whenToChooseB: "For task/work queues, complex routing rules, or per-message guarantees (job dispatch, RPC-style messaging, retry with dead-lettering)."
    },
    {
        id: "jwt-vs-session-tokens",
        title: "JWT vs Session Tokens",
        optionA: {
            name: "JWT (Stateless)",
            pros: [
                "No server-side lookup — claims verified via signature",
                "Works across services and domains without shared session store",
                "Scales horizontally with zero session affinity"
            ],
            cons: [
                "Hard to revoke before expiry — token is valid until it expires",
                "Token carries all claims — size overhead on every request",
                "Signing key rotation must be handled carefully (key IDs, JWKS)",
                "Stolen token is usable until expiry"
            ]
        },
        optionB: {
            name: "Session Tokens (Stateful)",
            pros: [
                "Instant revocation — delete the server-side record and the session dies",
                "Small opaque cookie — no claims exposed to the client",
                "Easy to inspect and manage active sessions"
            ],
            cons: [
                "Lookup on every request (DB or Redis)",
                "Session store is shared infrastructure to scale and keep available",
                "Cross-domain/microservice use needs extra plumbing"
            ]
        },
        whenToChooseA: "For microservices and cross-domain APIs — keep JWTs short-lived and pair with refresh tokens to limit the revocation gap.",
        whenToChooseB: "For classic web apps needing instant logout, ban, or session management — typically backed by Redis."
    },
    {
        id: "normalization-vs-denormalization",
        title: "Normalization vs Denormalization",
        optionA: {
            name: "Normalization (Write-Optimized)",
            pros: [
                "Single source of truth — no update anomalies",
                "Writes touch one place",
                "Smaller storage footprint",
                "Schema enforces integrity"
            ],
            cons: [
                "Reads pay for joins at query time",
                "Complex queries get slow as join depth grows",
                "Poor fit for distributed stores with weak join support"
            ]
        },
        optionB: {
            name: "Denormalization (Read-Optimized)",
            pros: [
                "Joins precomputed — fast, simple reads",
                "One document/row fetch serves the whole view",
                "Natural fit for NoSQL aggregates and feeds"
            ],
            cons: [
                "Duplicated data must be kept consistent",
                "Updates fan out to every copy",
                "Stale copies if propagation fails"
            ]
        },
        whenToChooseA: "For OLTP relational cores where correctness and write integrity dominate (orders, accounts, inventory).",
        whenToChooseB: "For read-heavy views (feeds, product pages, NoSQL aggregates) — and note most mature systems do both: a normalized source of truth plus denormalized read models or materialized views (CQRS)."
    },
    {
        id: "batch-vs-stream-processing",
        title: "Batch vs Stream Processing",
        optionA: {
            name: "Batch Processing",
            pros: [
                "High throughput over bounded datasets",
                "Simple mental model — run, finish, inspect output",
                "Easy reprocessing — just rerun the job",
                "Mature tooling (MapReduce, Spark)"
            ],
            cons: [
                "Results lag by the schedule interval — often hours",
                "Bursty resource usage around job runs",
                "Late-arriving data waits for the next run"
            ]
        },
        optionB: {
            name: "Stream Processing",
            pros: [
                "Low-latency results over unbounded data",
                "Windowing and watermarks handle event-time vs processing-time skew",
                "Continuous, steady resource usage (Flink, Kafka Streams)"
            ],
            cons: [
                "Harder operations — state management, backpressure, exactly-once semantics",
                "Late/out-of-order events need explicit handling",
                "Reprocessing requires replayable sources and careful state resets"
            ]
        },
        whenToChooseA: "For reports, ML training, billing runs — anywhere hours of latency is fine and reprocessability matters.",
        whenToChooseB: "For fraud detection, live dashboards, alerting — anywhere seconds matter. (Lambda architecture runs both layers; Kappa simplifies to stream-only with replay.)"
    },
    {
        id: "active-active-vs-active-passive",
        title: "Active-Active vs Active-Passive Multi-Region",
        optionA: {
            name: "Active-Active",
            pros: [
                "Both regions serve traffic — lower latency for nearby users",
                "All provisioned capacity is doing work",
                "Failover is just traffic shifting — region loss degrades, not breaks"
            ],
            cons: [
                "Concurrent writes in both regions can conflict",
                "Needs conflict resolution: conflict-free design, CRDTs, or region-pinned writes",
                "Cross-region replication lag means regions can briefly disagree"
            ]
        },
        optionB: {
            name: "Active-Passive",
            pros: [
                "Single write region — simple, strong consistency story",
                "No write conflicts to resolve",
                "Easier to reason about and operate"
            ],
            cons: [
                "Failover takes time (RTO) and may lose unreplicated writes (RPO)",
                "Standby capacity sits mostly idle",
                "Remote users pay cross-region write latency",
                "Failover paths rot unless regularly tested"
            ]
        },
        whenToChooseA: "For global, latency-sensitive products that can resolve or avoid write conflicts (DynamoDB global tables, CRDT-based or region-pinned designs).",
        whenToChooseB: "For systems where consistency is paramount and an RTO of minutes is acceptable (classic primary/DR Postgres setups)."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_system-design-simulator_src_data_0ta5ne1._.js.map