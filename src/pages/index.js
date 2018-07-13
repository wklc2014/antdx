import React from 'react';
import Link from 'umi/link';

export default function IndexPage() {

  return (
    <div>
      <p>
        <Link to="/example">Go to Example page</Link>
      </p>
      <p>
        <Link to="/picture">Go to Picture page</Link>
      </p>
    </div>
  )
}

IndexPage.propTypes = {

}

IndexPage.defaultProps = {

}
