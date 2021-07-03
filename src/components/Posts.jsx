import { gql, useQuery } from '@apollo/client';
import React from 'react';

const DATA = gql`
    query GetData {
        launchesPast(limit: 15) {
            mission_name
            rocket {
                rocket_name
            }
            details
            id
        }
    }
`;

function Posts() {
    const { loading, error, data } = useQuery(DATA);

    if (loading) return <h3 className="text-center">Loading</h3>;
    if (error) return <h3 className="text-center">Something went wrong</h3>;
    return (
        <div className="posts">
            {data.launchesPast.map((post) => (
                <div key={post.id}>
                    <h3>Mission: {post.mission_name}</h3>
                    <p>
                        <strong>Rocket:</strong> {post.rocket.rocket_name}
                    </p>
                    {post.details ? (
                        <p>
                            <strong>Details:</strong> {post.details}
                        </p>
                    ) : (
                        <p>No Details Available</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Posts;
